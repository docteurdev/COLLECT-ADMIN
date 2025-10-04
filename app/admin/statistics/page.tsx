"use client";

import { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  Package,
  DollarSign,
  Download,
  Filter,
  Calendar,
  Award,
  Target,
  PieChart,
} from "lucide-react";

const kitStatistics = [
  {
    name: "Kit Premium",
    totalSubscribers: 456,
    totalAmount: "136 800 000",
    averagePerClient: "300 000",
    completionRate: 78,
    color: "from-yellow-400 to-orange-500",
    commercials: [
      { name: "Marie Diop", count: 145, amount: "43 500 000" },
      { name: "Jean Kouadio", count: 132, amount: "39 600 000" },
      { name: "Pierre Bamba", count: 98, amount: "29 400 000" },
      { name: "Aminata Sy", count: 81, amount: "24 300 000" },
    ],
  },
  {
    name: "Kit Standard",
    totalSubscribers: 823,
    totalAmount: "164 600 000",
    averagePerClient: "200 000",
    completionRate: 82,
    color: "from-blue-400 to-indigo-500",
    commercials: [
      { name: "Marie Diop", count: 287, amount: "57 400 000" },
      { name: "Jean Kouadio", count: 243, amount: "48 600 000" },
      { name: "Pierre Bamba", count: 156, amount: "31 200 000" },
      { name: "Aminata Sy", count: 137, amount: "27 400 000" },
    ],
  },
  {
    name: "Kit Basic",
    totalSubscribers: 568,
    totalAmount: "56 800 000",
    averagePerClient: "100 000",
    completionRate: 85,
    color: "from-green-400 to-teal-500",
    commercials: [
      { name: "Marie Diop", count: 198, amount: "19 800 000" },
      { name: "Jean Kouadio", count: 176, amount: "17 600 000" },
      { name: "Pierre Bamba", count: 123, amount: "12 300 000" },
      { name: "Aminata Sy", count: 71, amount: "7 100 000" },
    ],
  },
  {
    name: "Kit VIP",
    totalSubscribers: 89,
    totalAmount: "44 500 000",
    averagePerClient: "500 000",
    completionRate: 65,
    color: "from-purple-400 to-pink-500",
    commercials: [
      { name: "Marie Diop", count: 23, amount: "11 500 000" },
      { name: "Jean Kouadio", count: 19, amount: "9 500 000" },
      { name: "Pierre Bamba", count: 15, amount: "7 500 000" },
      { name: "Aminata Sy", count: 32, amount: "16 000 000" },
    ],
  },
];

const commercialStats = [
  {
    name: "Marie Diop",
    totalClients: 653,
    totalAmount: "132 200 000",
    averagePerClient: "202 454",
    qualifiedClients: 487,
    color: "from-pink-400 to-rose-500",
  },
  {
    name: "Jean Kouadio",
    totalClients: 570,
    totalAmount: "115 300 000",
    averagePerClient: "202 281",
    qualifiedClients: 423,
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "Pierre Bamba",
    totalClients: 392,
    totalAmount: "80 400 000",
    averagePerClient: "205 102",
    qualifiedClients: 298,
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Aminata Sy",
    totalClients: 321,
    totalAmount: "74 800 000",
    averagePerClient: "233 022",
    qualifiedClients: 256,
    color: "from-purple-400 to-violet-500",
  },
];

const monthlyTrends = [
  { month: "Jan", amount: 45000000, clients: 320 },
  { month: "Fév", amount: 52000000, clients: 450 },
  { month: "Mar", amount: 68000000, clients: 620 },
  { month: "Avr", amount: 75000000, clients: 780 },
  { month: "Mai", amount: 82000000, clients: 890 },
  { month: "Juin", amount: 91000000, clients: 1020 },
  { month: "Juil", amount: 98000000, clients: 1180 },
  { month: "Août", amount: 105000000, clients: 1340 },
  { month: "Sep", amount: 118000000, clients: 1520 },
  { month: "Oct", amount: 132000000, clients: 1720 },
];

export default function StatisticsPage() {
  const [selectedKit, setSelectedKit] = useState("all");
  const [minThreshold, setMinThreshold] = useState("100000");
  const [selectedView, setSelectedView] = useState("overview");

  const totalSubscribers = kitStatistics.reduce((sum, kit) => sum + kit.totalSubscribers, 0);
  const totalRevenue = kitStatistics.reduce(
    (sum, kit) => sum + parseInt(kit.totalAmount.replace(/\s/g, "")),
    0
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Statistiques & Rapports
          </h1>
          <p className="text-gray-600">
            Analysez vos performances et générez des rapports détaillés
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Download className="w-5 h-5" />
            <span className="font-medium">Exporter Rapport</span>
          </button>
        </div>
      </div>

      {/* View Tabs */}
      <div className="flex gap-2 bg-white rounded-xl p-2 shadow-sm border border-gray-100">
        <button
          onClick={() => setSelectedView("overview")}
          className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
            selectedView === "overview"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          Vue d'ensemble
        </button>
        <button
          onClick={() => setSelectedView("kits")}
          className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
            selectedView === "kits"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          Par Kit
        </button>
        <button
          onClick={() => setSelectedView("commercials")}
          className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
            selectedView === "commercials"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          Par Commercial
        </button>
        <button
          onClick={() => setSelectedView("trends")}
          className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
            selectedView === "trends"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          Tendances
        </button>
      </div>

      {/* Global Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
          <Users className="w-8 h-8 mb-3 opacity-80" />
          <p className="text-sm opacity-90 mb-1">Total Souscripteurs</p>
          <p className="text-3xl font-bold">{totalSubscribers.toLocaleString()}</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
          <DollarSign className="w-8 h-8 mb-3 opacity-80" />
          <p className="text-sm opacity-90 mb-1">Revenu Total</p>
          <p className="text-3xl font-bold">{(totalRevenue / 1000000).toFixed(0)}M FCFA</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
          <Package className="w-8 h-8 mb-3 opacity-80" />
          <p className="text-sm opacity-90 mb-1">Kits Actifs</p>
          <p className="text-3xl font-bold">{kitStatistics.length}</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
          <TrendingUp className="w-8 h-8 mb-3 opacity-80" />
          <p className="text-sm opacity-90 mb-1">Taux Moyen</p>
          <p className="text-3xl font-bold">
            {Math.round(
              kitStatistics.reduce((sum, k) => sum + k.completionRate, 0) / kitStatistics.length
            )}%
          </p>
        </div>
      </div>

      {/* Overview View */}
      {selectedView === "overview" && (
        <div className="space-y-6">
          {/* Kit Distribution */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Distribution par Kit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kitStatistics.map((kit, index) => (
                <div key={index} className="space-y-3">
                  <div className={`p-6 rounded-xl bg-gradient-to-br ${kit.color} text-white`}>
                    <Package className="w-6 h-6 mb-2 opacity-80" />
                    <p className="text-sm opacity-90">{kit.name}</p>
                    <p className="text-3xl font-bold mt-2">{kit.totalSubscribers}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Montant Total</span>
                      <span className="font-semibold text-gray-900">
                        {(parseInt(kit.totalAmount.replace(/\s/g, "")) / 1000000).toFixed(0)}M
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Taux Complétion</span>
                      <span className="font-semibold text-gray-900">{kit.completionRate}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Top Commerciaux
              </h2>
              <div className="space-y-4">
                {commercialStats.map((commercial, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${commercial.color} flex items-center justify-center text-white font-bold`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{commercial.name}</p>
                        <p className="text-sm text-gray-500">{commercial.totalClients} clients</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">
                        {(parseInt(commercial.totalAmount.replace(/\s/g, "")) / 1000000).toFixed(1)}M
                      </p>
                      <p className="text-xs text-gray-500">FCFA</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Performance par Kit
              </h2>
              <div className="space-y-4">
                {kitStatistics.map((kit, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{kit.name}</span>
                      <span className="text-sm font-bold text-gray-900">{kit.completionRate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${kit.color} transition-all duration-500`}
                        style={{ width: `${kit.completionRate}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Kits View */}
      {selectedView === "kits" && (
        <div className="space-y-6">
          {kitStatistics.map((kit, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${kit.color} text-white`}>
                    <Package className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{kit.name}</h3>
                    <p className="text-gray-600">{kit.totalSubscribers} souscripteurs</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Montant Total</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {(parseInt(kit.totalAmount.replace(/\s/g, "")) / 1000000).toFixed(1)}M FCFA
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Prix Unitaire</p>
                  <p className="text-xl font-bold text-gray-900">{kit.averagePerClient} FCFA</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Souscripteurs</p>
                  <p className="text-xl font-bold text-gray-900">{kit.totalSubscribers}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Taux Complétion</p>
                  <p className="text-xl font-bold text-gray-900">{kit.completionRate}%</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Montant Total</p>
                  <p className="text-xl font-bold text-gray-900">
                    {(parseInt(kit.totalAmount.replace(/\s/g, "")) / 1000000).toFixed(0)}M
                  </p>
                </div>
              </div>

              <h4 className="font-semibold text-gray-900 mb-4">Répartition par Commercial</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {kit.commercials.map((commercial, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                    <div>
                      <p className="font-semibold text-gray-900">{commercial.name}</p>
                      <p className="text-sm text-gray-600">{commercial.count} clients</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">
                        {(parseInt(commercial.amount.replace(/\s/g, "")) / 1000000).toFixed(1)}M
                      </p>
                      <p className="text-xs text-gray-500">FCFA</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Commercials View */}
      {selectedView === "commercials" && (
        <div className="space-y-6">
          {/* Threshold Filter */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">
                Seuil minimum de cotisation (FCFA):
              </label>
              <input
                type="number"
                value={minThreshold}
                onChange={(e) => setMinThreshold(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">
                Affiche les clients avec cotisation ≥ {parseInt(minThreshold).toLocaleString()} FCFA
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {commercialStats.map((commercial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${commercial.color} flex items-center justify-center text-white text-xl font-bold`}>
                    {commercial.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{commercial.name}</h3>
                    <p className="text-gray-600">{commercial.totalClients} clients total</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Total Clients</p>
                    <p className="text-2xl font-bold text-gray-900">{commercial.totalClients}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Clients Qualifiés</p>
                    <p className="text-2xl font-bold text-green-600">{commercial.qualifiedClients}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Montant Total</p>
                    <p className="text-lg font-bold text-gray-900">
                      {(parseInt(commercial.totalAmount.replace(/\s/g, "")) / 1000000).toFixed(1)}M
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Moyenne/Client</p>
                    <p className="text-lg font-bold text-gray-900">
                      {(parseInt(commercial.averagePerClient.replace(/\s/g, "")) / 1000).toFixed(0)}K
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Taux de qualification</span>
                    <span className="font-bold text-gray-900">
                      {Math.round((commercial.qualifiedClients / commercial.totalClients) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${commercial.color}`}
                      style={{
                        width: `${(commercial.qualifiedClients / commercial.totalClients) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trends View */}
      {selectedView === "trends" && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Évolution Mensuelle
            </h2>
            <div className="space-y-4">
              {monthlyTrends.map((month, index) => {
                const maxAmount = Math.max(...monthlyTrends.map(m => m.amount));
                const percentage = (month.amount / maxAmount) * 100;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900 w-12">{month.month}</span>
                      <span className="text-sm text-gray-600">{month.clients} clients</span>
                      <span className="font-bold text-gray-900">
                        {(month.amount / 1000000).toFixed(0)}M FCFA
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}