"use client";

import { useState } from "react";
import {
  CreditCard,
  Calendar,
  Download,
  Filter,
  Search,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Users,
  CheckCircle2,
} from "lucide-react";

// Sample data for the weekly payment tracking
const weeklyPayments = [
  {
    id: 1,
    name: "Jean Kouassi",
    contact: "+225 07 12 34 56 78",
    totalGeneral: 245000,
    monday: 15000,
    tuesday: 20000,
    wednesday: 15000,
    thursday: 25000,
    friday: 18000,
    saturday: 12000,
    weekTotal: 105000,
    kit: "Kit Premium",
    commercial: "Marie Diop",
  },
  {
    id: 2,
    name: "Aya Traoré",
    contact: "+225 05 98 76 54 32",
    totalGeneral: 180000,
    monday: 25000,
    tuesday: 0,
    wednesday: 30000,
    thursday: 0,
    friday: 22000,
    saturday: 18000,
    weekTotal: 95000,
    kit: "Kit Standard",
    commercial: "Jean Kouadio",
  },
  {
    id: 3,
    name: "Kofi Mensah",
    contact: "+225 07 45 67 89 01",
    totalGeneral: 75000,
    monday: 10000,
    tuesday: 10000,
    wednesday: 8000,
    thursday: 12000,
    friday: 9000,
    saturday: 7000,
    weekTotal: 56000,
    kit: "Kit Basic",
    commercial: "Marie Diop",
  },
  {
    id: 4,
    name: "Fatou Diallo",
    contact: "+225 01 23 45 67 89",
    totalGeneral: 300000,
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    weekTotal: 0,
    kit: "Kit Premium",
    commercial: "Pierre Bamba",
  },
  {
    id: 5,
    name: "Ibrahim Sow",
    contact: "+225 07 88 99 00 11",
    totalGeneral: 120000,
    monday: 12000,
    tuesday: 15000,
    wednesday: 12000,
    thursday: 18000,
    friday: 15000,
    saturday: 10000,
    weekTotal: 82000,
    kit: "Kit Standard",
    commercial: "Marie Diop",
  },
  {
    id: 6,
    name: "Aminata Sy",
    contact: "+225 05 33 44 55 66",
    totalGeneral: 210000,
    monday: 20000,
    tuesday: 25000,
    wednesday: 20000,
    thursday: 22000,
    friday: 20000,
    saturday: 15000,
    weekTotal: 122000,
    kit: "Kit Premium",
    commercial: "Jean Kouadio",
  },
];

const daysOfWeek = [
  { key: "monday", label: "Lun", full: "Lundi" },
  { key: "tuesday", label: "Mar", full: "Mardi" },
  { key: "wednesday", label: "Mer", full: "Mercredi" },
  { key: "thursday", label: "Jeu", full: "Jeudi" },
  { key: "friday", label: "Ven", full: "Vendredi" },
  { key: "saturday", label: "Sam", full: "Samedi" },
];

export default function PaymentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentWeek, setCurrentWeek] = useState("Semaine du 28 Oct - 02 Nov 2025");
  const [filterKit, setFilterKit] = useState("all");

  const filteredPayments = weeklyPayments.filter((payment) => {
    const matchesSearch =
      payment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.contact.includes(searchQuery);
    const matchesKit = filterKit === "all" || payment.kit === filterKit;
    return matchesSearch && matchesKit;
  });

  // Calculate totals
  const totalWeekPayments = filteredPayments.reduce((sum, p) => sum + p.weekTotal, 0);
  const totalGeneralPayments = filteredPayments.reduce((sum, p) => sum + p.totalGeneral, 0);
  const activeClients = filteredPayments.filter((p) => p.weekTotal > 0).length;
  const dailyTotals = {
    monday: filteredPayments.reduce((sum, p) => sum + p.monday, 0),
    tuesday: filteredPayments.reduce((sum, p) => sum + p.tuesday, 0),
    wednesday: filteredPayments.reduce((sum, p) => sum + p.wednesday, 0),
    thursday: filteredPayments.reduce((sum, p) => sum + p.thursday, 0),
    friday: filteredPayments.reduce((sum, p) => sum + p.friday, 0),
    saturday: filteredPayments.reduce((sum, p) => sum + p.saturday, 0),
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Suivi des Versements
          </h1>
          <p className="text-gray-600">
            Historique détaillé des versements par jour et par semaine
          </p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
          <CreditCard className="w-5 h-5" />
          <span className="font-medium">Nouveau Versement</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Cette Semaine</p>
              <p className="text-2xl font-bold text-gray-900">
                {(totalWeekPayments / 1000).toFixed(0)}K FCFA
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-xl">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Général</p>
              <p className="text-2xl font-bold text-gray-900">
                {(totalGeneralPayments / 1000000).toFixed(1)}M FCFA
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Clients Actifs</p>
              <p className="text-3xl font-bold text-gray-900">{activeClients}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-xl">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Moyenne Jour</p>
              <p className="text-2xl font-bold text-gray-900">
                {(totalWeekPayments / 6 / 1000).toFixed(0)}K FCFA
              </p>
            </div>
            <div className="p-3 bg-orange-50 rounded-xl">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Week Navigation */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Week Navigation */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-900">{currentWeek}</span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-4 w-full lg:w-auto">
            <div className="relative flex-1 lg:flex-initial lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un client..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select
              value={filterKit}
              onChange={(e) => setFilterKit(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Tous les kits</option>
              <option value="Kit Premium">Kit Premium</option>
              <option value="Kit Standard">Kit Standard</option>
              <option value="Kit Basic">Kit Basic</option>
            </select>

            <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
              <Download className="w-5 h-5" />
              <span>Exporter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Weekly Payment Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider sticky left-0 bg-gradient-to-r from-blue-50 to-purple-50">
                  Nom Prénom
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Contacts
                </th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider bg-blue-100">
                  Total Glé
                </th>
                {daysOfWeek.map((day) => (
                  <th
                    key={day.key}
                    className="px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider"
                  >
                    {day.label}
                  </th>
                ))}
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider bg-green-100">
                  Total S
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPayments.map((payment) => (
                <tr
                  key={payment.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap sticky left-0 bg-white">
                    <div>
                      <p className="font-semibold text-gray-900">{payment.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">
                          {payment.kit}
                        </span>
                        <span className="text-xs text-gray-500">{payment.commercial}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{payment.contact}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center bg-blue-50">
                    <span className="font-bold text-blue-900">
                      {(payment.totalGeneral / 1000).toFixed(0)}K
                    </span>
                  </td>
                  {daysOfWeek.map((day) => {
                    const amount = payment[day.key as keyof typeof payment] as number;
                    return (
                      <td
                        key={day.key}
                        className={`px-4 py-4 whitespace-nowrap text-center ${
                          amount > 0 ? "bg-green-50" : ""
                        }`}
                      >
                        {amount > 0 ? (
                          <div className="flex flex-col items-center">
                            <span className="font-semibold text-green-700">
                              {(amount / 1000).toFixed(0)}K
                            </span>
                            <CheckCircle2 className="w-3 h-3 text-green-500 mt-1" />
                          </div>
                        ) : (
                          <span className="text-gray-300">-</span>
                        )}
                      </td>
                    );
                  })}
                  <td className="px-6 py-4 whitespace-nowrap text-center bg-green-100">
                    <span className="font-bold text-green-900">
                      {(payment.weekTotal / 1000).toFixed(0)}K
                    </span>
                  </td>
                </tr>
              ))}

              {/* Totals Row */}
              <tr className="bg-gradient-to-r from-gray-100 to-gray-50 font-bold">
                <td className="px-6 py-4 whitespace-nowrap sticky left-0 bg-gradient-to-r from-gray-100 to-gray-50">
                  <span className="text-gray-900">TOTAL</span>
                </td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-center bg-blue-100">
                  <span className="text-blue-900">
                    {(totalGeneralPayments / 1000).toFixed(0)}K
                  </span>
                </td>
                {daysOfWeek.map((day) => (
                  <td key={day.key} className="px-4 py-4 text-center bg-gray-200">
                    <span className="text-gray-900">
                      {(dailyTotals[day.key as keyof typeof dailyTotals] / 1000).toFixed(0)}K
                    </span>
                  </td>
                ))}
                <td className="px-6 py-4 text-center bg-green-200">
                  <span className="text-green-900">
                    {(totalWeekPayments / 1000).toFixed(0)}K
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {filteredPayments.length === 0 && (
          <div className="text-center py-12">
            <CreditCard className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Aucun versement trouvé</p>
          </div>
        )}
      </div>
    </div>
  );
}