"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Enquiry, EnquiryStatus } from "@/lib/types";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/servicesData";
import { galleryData as initialGallery, GalleryItem } from "@/data/galleryData";
import {
  Sparkles,
  Search,
  Filter,
  Download,
  Calendar,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  LogOut,
  Trash2,
  Edit,
  Save,
  Plus,
  Layers,
  Image as ImageIcon,
  Settings,
  Users,
  ChevronDown,
} from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function AdminDashboardPage() {
  const router = useRouter();

  // Auth & Page State
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"enquiries" | "services" | "gallery" | "settings">("enquiries");

  // Enquiries State
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [locationFilter, setLocationFilter] = useState<string>("All");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // Gallery Management State
  const [galleryList, setGalleryList] = useState<GalleryItem[]>(initialGallery);
  const [showAddImageModal, setShowAddImageModal] = useState(false);
  const [newImageTitle, setNewImageTitle] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newImageCategory, setNewImageCategory] = useState<any>("Wedding Stages");
  const [newImageLocation, setNewImageLocation] = useState<any>("Tirupati");

  // Settings State
  const [contactPhone, setContactPhone] = useState(siteConfig.contact.primaryPhone);
  const [whatsappNumber, setWhatsappNumber] = useState(siteConfig.contact.displayWhatsapp);
  const [contactEmail, setContactEmail] = useState(siteConfig.contact.email);
  const [savedSettingsNotice, setSavedSettingsNotice] = useState(false);

  // Check auth and fetch enquiries
  useEffect(() => {
    async function init() {
      try {
        const checkRes = await fetch("/api/admin/check");
        const checkData = await checkRes.json();

        if (!checkData.authenticated) {
          router.push("/admin/login");
          return;
        }

        // Fetch enquiries
        const enqRes = await fetch("/api/enquiries");
        const enqData = await enqRes.json();
        if (enqData.enquiries) {
          setEnquiries(enqData.enquiries);
        }
      } catch (err) {
        console.error("Initialization error:", err);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [router]);

  // Handle Logout
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
    } catch {
      router.push("/admin/login");
    }
  };

  // Update Enquiry Status
  const handleStatusChange = async (id: string, newStatus: EnquiryStatus) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
        );
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setUpdatingId(null);
    }
  };

  // Delete Enquiry
  const handleDeleteEnquiry = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this enquiry?")) return;

    try {
      const res = await fetch(`/api/enquiries/${id}`, { method: "DELETE" });
      if (res.ok) {
        setEnquiries((prev) => prev.filter((e) => e.id !== id));
      }
    } catch (err) {
      console.error("Failed to delete enquiry:", err);
    }
  };

  // Add Gallery Image
  const handleAddGalleryImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImageTitle || !newImageUrl) return;

    const newItem: GalleryItem = {
      id: `gal-custom-${Date.now()}`,
      title: newImageTitle,
      category: newImageCategory,
      location: newImageLocation,
      image: newImageUrl,
      thumbnail: newImageUrl,
      aspectRatio: "wide",
      description: "Added via Admin CMS",
    };

    setGalleryList([newItem, ...galleryList]);
    setNewImageTitle("");
    setNewImageUrl("");
    setShowAddImageModal(false);
  };

  // Delete Gallery Image
  const handleDeleteGalleryImage = (id: string) => {
    if (!confirm("Delete this portfolio image?")) return;
    setGalleryList((prev) => prev.filter((item) => item.id !== id));
  };

  // Save Settings Mock
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSettingsNotice(true);
    setTimeout(() => setSavedSettingsNotice(false), 3000);
  };

  // Filtered Enquiries
  const filteredEnquiries = enquiries.filter((e) => {
    const matchesSearch =
      e.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.phone.includes(searchQuery) ||
      e.event_type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "All" || e.status === statusFilter;
    const matchesLocation =
      locationFilter === "All" || e.location.toLowerCase().includes(locationFilter.toLowerCase());

    return matchesSearch && matchesStatus && matchesLocation;
  });

  // Metrics
  const totalEnquiriesCount = enquiries.length;
  const newLeadsCount = enquiries.filter((e) => e.status === "New").length;
  const confirmedCount = enquiries.filter((e) => e.status === "Confirmed").length;
  const completedCount = enquiries.filter((e) => e.status === "Completed").length;

  const statusColors: Record<EnquiryStatus, string> = {
    New: "bg-blue-50 text-blue-700 border-blue-200",
    Contacted: "bg-purple-50 text-purple-700 border-purple-200",
    "Quotation Sent": "bg-amber-50 text-amber-800 border-amber-200",
    Confirmed: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Completed: "bg-teal-50 text-teal-700 border-teal-200",
    Cancelled: "bg-red-50 text-red-700 border-red-200",
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 text-burgundy font-serif text-xl">
        Loading VSM Events Administrator Console...
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-ivory-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Header Bar */}
        <div className="p-6 rounded-3xl bg-white border border-gold/30 shadow-md mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-burgundy text-champagne flex items-center justify-center font-serif font-bold text-base shadow-sm">
              VSM
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-burgundy">
                Administrator Dashboard
              </h1>
              <p className="text-xs text-obsidian/60">
                Logged in as Master Administrator • VSM Events
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="text-xs font-semibold px-4 py-2 rounded-full bg-ivory-100 hover:bg-ivory-200 text-burgundy border border-gold/30 transition-colors"
            >
              View Live Website ↗
            </Link>
            <button
              onClick={handleLogout}
              className="text-xs font-semibold px-4 py-2 rounded-full bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Overview Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-white border border-gold/25 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-obsidian/60 font-semibold block mb-1">
              Total Inquiries
            </span>
            <span className="font-serif text-3xl font-bold text-burgundy">
              {totalEnquiriesCount}
            </span>
            <span className="text-[11px] text-obsidian/50 block mt-1">
              All time leads
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-blue-200 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-blue-700 font-semibold block mb-1">
              New Inquiries
            </span>
            <span className="font-serif text-3xl font-bold text-blue-800">
              {newLeadsCount}
            </span>
            <span className="text-[11px] text-blue-600/70 block mt-1">
              Action required
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-semibold block mb-1">
              Confirmed Events
            </span>
            <span className="font-serif text-3xl font-bold text-emerald-800">
              {confirmedCount}
            </span>
            <span className="text-[11px] text-emerald-600/70 block mt-1">
              Bookings locked
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gold/25 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-gold-700 font-semibold block mb-1">
              Completed Events
            </span>
            <span className="font-serif text-3xl font-bold text-gold-800">
              {completedCount}
            </span>
            <span className="text-[11px] text-gold-700/70 block mt-1">
              Successfully executed
            </span>
          </div>
        </div>

        {/* Nav Tabs */}
        <div className="flex items-center gap-2 border-b border-gold/20 pb-4 mb-8 overflow-x-auto">
          {[
            { id: "enquiries", label: "Client Enquiries", icon: Users, badge: newLeadsCount },
            { id: "services", label: "Manage Services", icon: Layers },
            { id: "gallery", label: "Portfolio Gallery", icon: ImageIcon },
            { id: "settings", label: "Website Settings", icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all shrink-0 ${
                  isActive
                    ? "bg-burgundy text-white shadow-sm"
                    : "bg-white hover:bg-ivory-100 text-obsidian/75 border border-gold/20"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.badge && tab.badge > 0 ? (
                  <span className="w-5 h-5 rounded-full bg-gold-500 text-obsidian text-[10px] font-bold flex items-center justify-center">
                    {tab.badge}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        {/* TAB 1: ENQUIRIES */}
        {activeTab === "enquiries" && (
          <div className="space-y-6">
            {/* Search, Filter & CSV Export Toolbar */}
            <div className="p-4 rounded-2xl bg-white border border-gold/20 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Search input */}
              <div className="relative flex-grow max-w-md">
                <Search className="w-4 h-4 text-obsidian/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by client name, phone, city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-gold/30 focus:border-gold-600 focus:outline-none bg-ivory-50/50"
                />
              </div>

              {/* Status & Location Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-obsidian/60 text-[11px] font-medium">Status:</span>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-1.5 rounded-lg border border-gold/30 text-xs bg-white focus:outline-none"
                  >
                    <option value="All">All Statuses</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Quotation Sent">Quotation Sent</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>

                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-obsidian/60 text-[11px] font-medium">Location:</span>
                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="px-3 py-1.5 rounded-lg border border-gold/30 text-xs bg-white focus:outline-none"
                  >
                    <option value="All">All Cities</option>
                    <option value="Chittoor">Chittoor</option>
                    <option value="Tirupati">Tirupati</option>
                    <option value="Vellore">Vellore</option>
                    <option value="Bengaluru">Bengaluru</option>
                  </select>
                </div>

                {/* CSV Export Button */}
                <a
                  href="/api/enquiries/export"
                  download
                  className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm ml-auto"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export to CSV</span>
                </a>
              </div>
            </div>

            {/* Enquiries List */}
            {filteredEnquiries.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-white border border-gold/20 text-obsidian/60 text-sm">
                No client inquiries matched your filter criteria.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filteredEnquiries.map((enq) => (
                  <div
                    key={enq.id}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-gold/20 shadow-sm hover:border-gold/50 transition-all flex flex-col md:flex-row md:items-start justify-between gap-6"
                  >
                    {/* Left Info */}
                    <div className="space-y-2.5 max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-serif text-lg sm:text-xl font-bold text-burgundy">
                          {enq.full_name}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-ivory-100 text-burgundy border border-gold/30">
                          {enq.event_type}
                        </span>
                        <span className="text-xs text-obsidian/50">
                          Submitted {formatDate(enq.created_at)}
                        </span>
                      </div>

                      {/* Event Details Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-obsidian/80 pt-1">
                        <div>
                          <span className="text-[10px] text-obsidian/50 uppercase block">
                            Event Date
                          </span>
                          <span className="font-semibold text-burgundy">
                            {formatDate(enq.event_date)}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] text-obsidian/50 uppercase block">
                            Location
                          </span>
                          <span className="font-semibold">{enq.location}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-obsidian/50 uppercase block">
                            Guest Count
                          </span>
                          <span>{enq.guest_count}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-obsidian/50 uppercase block">
                            Est. Budget
                          </span>
                          <span className="font-semibold text-gold-800">
                            {enq.estimated_budget}
                          </span>
                        </div>
                      </div>

                      {/* Decor Preferences & Requirements */}
                      {enq.decoration_preferences && (
                        <div className="text-xs text-obsidian/70 bg-ivory-50/70 p-2.5 rounded-xl border border-gold/15">
                          <strong className="text-burgundy">Decor Preferences:</strong>{" "}
                          {enq.decoration_preferences}
                        </div>
                      )}

                      {enq.additional_requirements && (
                        <div className="text-xs text-obsidian/70 bg-ivory-50/70 p-2.5 rounded-xl border border-gold/15">
                          <strong className="text-burgundy">Special Notes:</strong>{" "}
                          {enq.additional_requirements}
                        </div>
                      )}

                      {/* Contact Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <a
                          href={`tel:${enq.phone.replace(/[^0-9+]/g, "")}`}
                          className="inline-flex items-center gap-1.5 text-xs text-burgundy font-semibold hover:underline"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>{enq.phone}</span>
                        </a>

                        <a
                          href={`https://wa.me/${enq.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20${encodeURIComponent(enq.full_name)},%20this%20is%20VSM%20Events%20team%20regarding%20your%20${encodeURIComponent(enq.event_type)}%20enquiry.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold hover:underline"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Chat on WhatsApp</span>
                        </a>
                      </div>
                    </div>

                    {/* Right Actions: Status Dropdown & Delete */}
                    <div className="flex flex-col sm:items-end gap-3 shrink-0 pt-2 md:pt-0">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-obsidian/60 mb-1">
                          Enquiry Status
                        </label>
                        <select
                          value={enq.status}
                          disabled={updatingId === enq.id}
                          onChange={(e) =>
                            handleStatusChange(enq.id, e.target.value as EnquiryStatus)
                          }
                          className={`text-xs font-semibold px-3 py-1.5 rounded-lg border focus:outline-none transition-all ${
                            statusColors[enq.status]
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Quotation Sent">Quotation Sent</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>

                      <button
                        onClick={() => handleDeleteEnquiry(enq.id)}
                        className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1 mt-2 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete Record</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SERVICES CMS */}
        {activeTab === "services" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-burgundy">
                  Active Services Catalog (12 Disciplines)
                </h3>
                <p className="text-xs text-obsidian/60">
                  Review and manage the active services displayed across the website.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesData.map((svc) => (
                <div
                  key={svc.id}
                  className="p-5 rounded-2xl bg-white border border-gold/20 shadow-sm flex items-start gap-4"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-obsidian-900">
                    <Image src={svc.image} alt={svc.title} fill className="object-cover" />
                  </div>
                  <div className="flex-grow">
                    <span className="text-[10px] uppercase tracking-wider text-gold-700 font-semibold block">
                      {svc.category}
                    </span>
                    <h4 className="font-serif font-bold text-base text-burgundy">
                      {svc.title}
                    </h4>
                    <p className="text-xs text-obsidian/70 line-clamp-2 mt-1">
                      {svc.shortDesc}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Link
                        href={`/services/${svc.slug}`}
                        target="_blank"
                        className="text-[11px] text-burgundy font-semibold hover:underline"
                      >
                        Preview Service Page ↗
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: GALLERY CMS */}
        {activeTab === "gallery" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-burgundy">
                  Portfolio Gallery Media ({galleryList.length} Photos)
                </h3>
                <p className="text-xs text-obsidian/60">
                  Manage the high-resolution event photography displayed in the gallery.
                </p>
              </div>

              <button
                onClick={() => setShowAddImageModal(true)}
                className="px-4 py-2 rounded-full bg-burgundy text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm hover:bg-burgundy-900 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Image</span>
              </button>
            </div>

            {/* Add Image Modal */}
            {showAddImageModal && (
              <div className="p-6 rounded-2xl bg-white border-2 border-gold/40 shadow-lg animate-fade-in mb-6">
                <h4 className="font-serif text-lg font-bold text-burgundy mb-4">
                  Add New Portfolio Image
                </h4>
                <form onSubmit={handleAddGalleryImage} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-obsidian/80 mb-1">
                      Event Title / Setup Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Royal Gold Temple Mandap"
                      value={newImageTitle}
                      onChange={(e) => setNewImageTitle(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-gold/30 bg-ivory-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-obsidian/80 mb-1">
                      Image URL (Unsplash or Supabase Storage)
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://images.unsplash.com/..."
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-gold/30 bg-ivory-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-obsidian/80 mb-1">
                      Category
                    </label>
                    <select
                      value={newImageCategory}
                      onChange={(e) => setNewImageCategory(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-gold/30 bg-ivory-50/50"
                    >
                      <option value="Wedding Stages">Wedding Stages</option>
                      <option value="Floral Mandaps">Floral Mandaps</option>
                      <option value="Reception Setups">Reception Setups</option>
                      <option value="Birthday Themes">Birthday Themes</option>
                      <option value="Traditional Decor">Traditional Decor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-obsidian/80 mb-1">
                      Location
                    </label>
                    <select
                      value={newImageLocation}
                      onChange={(e) => setNewImageLocation(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-gold/30 bg-ivory-50/50"
                    >
                      <option value="Chittoor">Chittoor</option>
                      <option value="Tirupati">Tirupati</option>
                      <option value="Vellore">Vellore</option>
                      <option value="Bengaluru">Bengaluru</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddImageModal(false)}
                      className="px-4 py-2 rounded-full text-xs text-obsidian/60 hover:text-obsidian"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-full bg-burgundy text-white text-xs font-semibold"
                    >
                      Save to Gallery
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryList.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden bg-white border border-gold/20 shadow-sm flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] bg-obsidian-900">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-3.5 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-gold-700 block">
                        {item.category} • {item.location}
                      </span>
                      <h4 className="font-serif font-bold text-xs text-burgundy line-clamp-1 mt-0.5">
                        {item.title}
                      </h4>
                    </div>

                    <button
                      onClick={() => handleDeleteGalleryImage(item.id)}
                      className="mt-3 text-[11px] text-red-600 hover:text-red-800 flex items-center gap-1 self-end transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: SETTINGS CMS */}
        {activeTab === "settings" && (
          <div className="max-w-2xl bg-white p-8 rounded-3xl border border-gold/20 shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-burgundy">
                Business & Contact Information
              </h3>
              <p className="text-xs text-obsidian/60">
                Update phone numbers, WhatsApp numbers, and notification defaults.
              </p>
            </div>

            {savedSettingsNotice && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Settings updated successfully!</span>
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-semibold text-obsidian/80 mb-1">
                  Primary Contact Phone
                </label>
                <input
                  type="text"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gold/30 bg-ivory-50/50"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold text-obsidian/80 mb-1">
                  Official WhatsApp Contact Number
                </label>
                <input
                  type="text"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gold/30 bg-ivory-50/50"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold text-obsidian/80 mb-1">
                  Inquiry Notification Email
                </label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gold/30 bg-ivory-50/50"
                />
              </div>

              <div className="pt-4 border-t border-gold/15">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-burgundy text-white text-xs font-semibold shadow-sm hover:bg-burgundy-900 transition-colors"
                >
                  Save Business Details
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
