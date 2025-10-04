"use client";

import { useState } from "react";
import {
  Package,
  Plus,
  Edit,
  Trash2,
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  Eye,
  Settings,
} from "lucide-react";

const kits = [
  {
    id: 1,
    name: "Kit Premium",
    price: "300 000",
    description: "Kit haut de gamme avec tous les avantages",
    color: "from-yellow-400 to-orange-500",
    subscribers: 456,
    totalAmount: "136 800 000",
    averageCompletion: 78,
    status: "active",
    createdAt: "2025-01-15",
  },
  {
    id: 2,
    name: "Kit Standard",
    price: "200 000",
    description: "Kit équilibré pour la majorité",
    color: "from-blue-400 to-indigo-500",
    subscribers: 823,
    totalAmount: "164 600 000",
    averageCompletion: 82,
    status: "active",
    createdAt: "2025-01-15",
  },
  {
    id: 3,
    name: "Kit Basic",
    price: "100 000",
    description: "Kit économique et accessible",
    color: "from-green-400 to-teal-500",
    subscribers: 568,
    totalAmount: "56 800 000",
    averageCompletion: 85,
    status: "active",
    createdAt: "2025-01-15",
  },
  {
    id: 4,
    name: "Kit VIP",
    price: "500 000",
    description: "Kit exclusif avec services premium",
    color: "from-purple-400 to-pink-500",
    subscribers: 89,
    totalAmount: "44 500 000",
    averageCompletion: 65,
    status: "active",
    createdAt: "2025-02-01",
  },
];

const topSubscribers = [
  { name: "Jean Kouassi", kit: "Kit Premium", paid: "245 000", target: "300 000", progress: 82 },
  { name: "Aya Traoré", kit: "Kit Standard", paid: "180 000", target: "200 000", progress: 90 },
  { name: "Fatou Diallo", kit: "Kit Premium", paid: "300 000", target: "300 000", progress: 100 },
  { name: "Aminata Sy", kit: "Kit Premium", paid: "210 000", target: "300 000", progress: 70 },
  { name: "Ibrahim Sow", kit: "Kit Standard", paid: "120 000", target: "200 000", progress: 60 },
];

const commercialPerformance = [
  { name: "Marie Diop", kits: { Premium: 145, Standard: 287, Basic: 198, VIP: 23 } },
  { name: "Jean Kouadio", kits: { Premium: 132, Standard: 243, Basic: 176, VIP: 19 } },
  { name: "Pierre Bamba", kits: { Premium: 98, Standard: 156, Basic: 123, VIP: 15 } },
  { name: "Aminata Sy", kits: { Premium: 81, Standard: 137, Basic: 71, VIP: 32 } },
];

export default function KitsPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedKit, setSelectedKit] = useState<number | null>(null);

  const totalSubscribers = kits.reduce((sum, kit) => sum + kit.subscribers, 0);
  const totalRevenue = kits.reduce(
    (sum, kit) => sum + parseInt(kit.totalAmount.replace(/\s/g, "")),
    0
  );
  const activeKits = kits.filter((k) => k.status === "active").length;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gestion des Kits
          </h1>
          <p className="text-gray-600">
            Créez et gérez vos kits de souscription pour la saison en cours
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Créer un Kit</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Kits Actifs</p>
              <p className="text-3xl font-bold text-gray-900">{activeKits}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Souscripteurs</p>
              <p className="text-3xl font-bold text-gray-900">{totalSubscribers.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-xl">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Revenu Total</p>
              <p className="text-2xl font-bold text-gray-900">
                {(totalRevenue / 1000000).toFixed(1)}M FCFA
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-xl">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Taux Moyen</p>
              <p className="text-3xl font-bold text-gray-900">
                {Math.round(
                  kits.reduce((sum, k) => sum + k.averageCompletion, 0) / kits.length
                )}%
              </p>
            </div>
            <div className="p-3 bg-orange-50 rounded-xl">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Kits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kits.map((kit) => (
          <div
            key={kit.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
          >
            {/* Kit Header with Gradient */}
            <div className={`p-6 bg-gradient-to-br ${kit.color} text-white relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                <Package className="w-8 h-8 mb-3" />
                <h3 className="text-xl font-bold mb-1">{kit.name}</h3>
                <p className="text-sm opacity-90">{kit.description}</p>
              </div>
            </div>

            {/* Kit Details */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Prix</span>
                <span className="text-xl font-bold text-gray-900">
                  {kit.price} FCFA
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Souscripteurs</span>
                  <span className="font-semibold text-gray-900">{kit.subscribers}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Montant Total</span>
                  <span className="font-semibold text-gray-900">
                    {(parseInt(kit.totalAmount.replace(/\s/g, "")) / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Taux Moyen</span>
                  <span className="font-semibold text-gray-900">{kit.averageCompletion}%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="text-xs text-gray-500">Complétion moyenne</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${kit.color} transition-all duration-500`}
                    style={{ width: `${kit.averageCompletion}%` }}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setSelectedKit(kit.id)}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-medium">Voir</span>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Edit className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Subscribers Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Subscribers */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Meilleurs Souscripteurs
          </h2>
          <div className="space-y-4">
            {topSubscribers.map((sub, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{sub.name}</p>
                    <p className="text-sm text-gray-500">{sub.kit}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{sub.progress}%</p>
                  <p className="text-xs text-gray-500">
                    {sub.paid} / {sub.target}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Performance by Kit */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Performance par Commercial
          </h2>
          <div className="space-y-6">
            {commercialPerformance.map((commercial, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900">{commercial.name}</p>
                  <p className="text-sm text-gray-500">
                    {Object.values(commercial.kits).reduce((a, b) => a + b, 0)} clients
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center p-2 bg-yellow-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Premium</p>
                    <p className="font-bold text-yellow-700">{commercial.kits.Premium}</p>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Standard</p>
                    <p className="font-bold text-blue-700">{commercial.kits.Standard}</p>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Basic</p>
                    <p className="font-bold text-green-700">{commercial.kits.Basic}</p>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">VIP</p>
                    <p className="font-bold text-purple-700">{commercial.kits.VIP}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Kit Modal Placeholder */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 animate-in zoom-in duration-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Créer un Nouveau Kit
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom du Kit
                </label>
                <input
                  type="text"
                  placeholder="Ex: Kit Premium"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prix (FCFA)
                </label>
                <input
                  type="number"
                  placeholder="300000"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Description du kit..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
                  Créer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}