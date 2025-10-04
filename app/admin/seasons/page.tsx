"use client";

import { useState } from "react";
import {
  Calendar,
  Plus,
  Archive,
  Eye,
  Settings,
  TrendingUp,
  Users,
  Package,
  DollarSign,
  Clock,
  CheckCircle2,
  XCircle,
  Play,
  Pause,
} from "lucide-react";

const seasons = [
  {
    id: 1,
    name: "Saison 2025",
    year: 2025,
    status: "active",
    startDate: "2025-01-15",
    endDate: null,
    totalClients: 1847,
    totalRevenue: "402 700 000",
    totalKits: 12,
    averageCompletion: 78,
    createdBy: "Admin",
  },
  {
    id: 2,
    name: "Saison 2024",
    year: 2024,
    status: "archived",
    startDate: "2024-01-10",
    endDate: "2024-12-31",
    totalClients: 1543,
    totalRevenue: "365 400 000",
    totalKits: 10,
    averageCompletion: 85,
    createdBy: "Admin",
  },
  {
    id: 3,
    name: "Saison 2023",
    year: 2023,
    status: "archived",
    startDate: "2023-01-15",
    endDate: "2023-12-31",
    totalClients: 1298,
    totalRevenue: "298 600 000",
    totalKits: 8,
    averageCompletion: 82,
    createdBy: "Admin",
  },
];

const seasonDetails = {
  clients: [
    { month: "Jan", count: 145, revenue: "35 200 000" },
    { month: "Fév", count: 289, revenue: "42 300 000" },
    { month: "Mar", count: 421, revenue: "51 800 000" },
    { month: "Avr", count: 587, revenue: "63 500 000" },
    { month: "Mai", count: 734, revenue: "75 200 000" },
    { month: "Juin", count: 892, revenue: "88 900 000" },
    { month: "Juil", count: 1045, revenue: "102 400 000" },
    { month: "Août", count: 1234, revenue: "118 700 000" },
    { month: "Sep", count: 1456, revenue: "135 300 000" },
    { month: "Oct", count: 1847, revenue: "402 700 000" },
  ],
  kits: [
    { name: "Kit Premium", subscribers: 456, amount: "136 800 000" },
    { name: "Kit Standard", subscribers: 823, amount: "164 600 000" },
    { name: "Kit Basic", subscribers: 568, amount: "56 800 000" },
    { name: "Kit VIP", subscribers: 89, amount: "44 500 000" },
  ],
  topCommercials: [
    { name: "Marie Diop", clients: 653, amount: "132 200 000" },
    { name: "Jean Kouadio", clients: 570, amount: "115 300 000" },
    { name: "Pierre Bamba", clients: 392, amount: "80 400 000" },
    { name: "Aminata Sy", clients: 321, amount: "74 800 000" },
  ],
};

export default function SeasonsPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState<number | null>(1);
  const [showArchiveModal, setShowArchiveModal] = useState(false);

  const activeSeason = seasons.find((s) => s.status === "active");
  const archivedSeasons = seasons.filter((s) => s.status === "archived");

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gestion des Saisons
          </h1>
          <p className="text-gray-600">
            Créez, gérez et archivez vos saisons de collecte
          </p>
        </div>
        <div className="flex gap-3">
          {activeSeason && (
            <button
              onClick={() => setShowArchiveModal(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
            >
              <Archive className="w-5 h-5" />
              <span className="font-medium">Archiver Saison Actuelle</span>
            </button>
          )}
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Plus className="w-5 h-5" />
            <span className="font-medium">Nouvelle Saison</span>
          </button>
        </div>
      </div>

      {/* Active Season Card */}
      {activeSeason && (
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Calendar className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-3xl font-bold">{activeSeason.name}</h2>
                  <span className="px-3 py-1 bg-green-500 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Play className="w-3 h-3" />
                    <span>Active</span>
                  </span>
                </div>
                <p className="text-blue-100">
                  Démarrée le {new Date(activeSeason.startDate).toLocaleDateString("fr-FR")}
                </p>
              </div>
            </div>
            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-sm">
              <Settings className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Users className="w-5 h-5 opacity-80" />
                <span className="text-sm opacity-90">Total Clients</span>
              </div>
              <p className="text-3xl font-bold">{activeSeason.totalClients.toLocaleString()}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <DollarSign className="w-5 h-5 opacity-80" />
                <span className="text-sm opacity-90">Revenu Total</span>
              </div>
              <p className="text-3xl font-bold">
                {(parseInt(activeSeason.totalRevenue.replace(/\s/g, "")) / 1000000).toFixed(0)}M
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Package className="w-5 h-5 opacity-80" />
                <span className="text-sm opacity-90">Kits Actifs</span>
              </div>
              <p className="text-3xl font-bold">{activeSeason.totalKits}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <TrendingUp className="w-5 h-5 opacity-80" />
                <span className="text-sm opacity-90">Taux Moyen</span>
              </div>
              <p className="text-3xl font-bold">{activeSeason.averageCompletion}%</p>
            </div>
          </div>
        </div>
      )}

      {/* Season Details Tabs */}
      {activeSeason && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Monthly Evolution */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Évolution Mensuelle
            </h3>
            <div className="space-y-3">
              {seasonDetails.clients.map((month, index) => {
                const maxRevenue = Math.max(
                  ...seasonDetails.clients.map((m) => parseInt(m.revenue.replace(/\s/g, "")))
                );
                const percentage =
                  (parseInt(month.revenue.replace(/\s/g, "")) / maxRevenue) * 100;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-gray-900 w-12">{month.month}</span>
                      <span className="text-gray-600">{month.count} clients</span>
                      <span className="font-bold text-gray-900">
                        {(parseInt(month.revenue.replace(/\s/g, "")) / 1000000).toFixed(0)}M FCFA
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kits Distribution */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Distribution Kits
            </h3>
            <div className="space-y-4">
              {seasonDetails.kits.map((kit, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">{kit.name}</span>
                    <span className="text-sm text-gray-600">{kit.subscribers}</span>
                  </div>
                  <p className="text-sm font-bold text-gray-700">
                    {(parseInt(kit.amount.replace(/\s/g, "")) / 1000000).toFixed(1)}M FCFA
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Archived Seasons */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Saisons Archivées</h2>
          <span className="text-sm text-gray-600">
            {archivedSeasons.length} saison(s) archivée(s)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {archivedSeasons.map((season) => (
            <div
              key={season.id}
              className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
              onClick={() => setSelectedSeason(season.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Archive className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{season.name}</h3>
                    <p className="text-xs text-gray-500">Archivée</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                  {season.year}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Période</span>
                  <span className="font-medium text-gray-900">
                    {new Date(season.startDate).toLocaleDateString("fr-FR", {
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    {season.endDate
                      ? new Date(season.endDate).toLocaleDateString("fr-FR", {
                          month: "short",
                          year: "numeric",
                        })
                      : "..."}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Clients</span>
                  <span className="font-bold text-gray-900">
                    {season.totalClients.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Revenu</span>
                  <span className="font-bold text-gray-900">
                    {(parseInt(season.totalRevenue.replace(/\s/g, "")) / 1000000).toFixed(0)}M
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Taux</span>
                  <span className="font-bold text-green-600">{season.averageCompletion}%</span>
                </div>

                <button className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-medium">Consulter</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Season Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 animate-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Nouvelle Saison</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <XCircle className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de la Saison
                </label>
                <input
                  type="text"
                  placeholder="Ex: Saison 2026"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Année
                </label>
                <input
                  type="number"
                  placeholder="2026"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de Début
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> La création d'une nouvelle saison archivera automatiquement
                  la saison actuellement active.
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Annuler
                </button>
                <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-medium">
                  Créer Saison
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Archive Confirmation Modal */}
      {showArchiveModal && activeSeason && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 animate-in zoom-in duration-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Archive className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Archiver la Saison?
              </h3>
              <p className="text-gray-600">
                Vous êtes sur le point d'archiver <strong>{activeSeason.name}</strong>. Cette action
                clôturera définitivement la saison en cours.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-yellow-800">
                <strong>Attention:</strong> Les données seront conservées mais ne pourront plus être
                modifiées. Assurez-vous que tous les versements sont enregistrés.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowArchiveModal(false)}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                Annuler
              </button>
              <button className="flex-1 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-colors font-medium">
                Archiver
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}