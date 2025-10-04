"use client";

import { useState } from "react";
import {
  Users,
  Search,
  Filter,
  Download,
  Plus,
  Phone,
  MapPin,
  Package,
  TrendingUp,
  Calendar,
  Eye,
} from "lucide-react";

const clients = [
  {
    id: 1,
    orderNumber: "001",
    name: "Jean Kouassi",
    phone: "+225 07 12 34 56 78",
    location: "Abidjan, Cocody",
    kit: "Kit Premium",
    totalPaid: "245 000",
    target: "300 000",
    progress: 82,
    lastPayment: "Aujourd'hui",
    commercial: "Marie Diop",
    status: "active",
  },
  {
    id: 2,
    orderNumber: "002",
    name: "Aya Traoré",
    phone: "+225 05 98 76 54 32",
    location: "Abidjan, Marcory",
    kit: "Kit Standard",
    totalPaid: "180 000",
    target: "200 000",
    progress: 90,
    lastPayment: "Hier",
    commercial: "Jean Kouadio",
    status: "active",
  },
  {
    id: 3,
    orderNumber: "003",
    name: "Kofi Mensah",
    phone: "+225 07 45 67 89 01",
    location: "Abidjan, Yopougon",
    kit: "Kit Basic",
    totalPaid: "75 000",
    target: "100 000",
    progress: 75,
    lastPayment: "Il y a 3 jours",
    commercial: "Marie Diop",
    status: "active",
  },
  {
    id: 4,
    orderNumber: "004",
    name: "Fatou Diallo",
    phone: "+225 01 23 45 67 89",
    location: "Abidjan, Plateau",
    kit: "Kit Premium",
    totalPaid: "300 000",
    target: "300 000",
    progress: 100,
    lastPayment: "Il y a 1 semaine",
    commercial: "Pierre Bamba",
    status: "completed",
  },
  {
    id: 5,
    orderNumber: "005",
    name: "Ibrahim Sow",
    phone: "+225 07 88 99 00 11",
    location: "Abidjan, Abobo",
    kit: "Kit Standard",
    totalPaid: "120 000",
    target: "200 000",
    progress: 60,
    lastPayment: "Il y a 2 jours",
    commercial: "Marie Diop",
    status: "active",
  },
  {
    id: 6,
    orderNumber: "006",
    name: "Aminata Sy",
    phone: "+225 05 33 44 55 66",
    location: "Abidjan, Treichville",
    kit: "Kit Premium",
    totalPaid: "210 000",
    target: "300 000",
    progress: 70,
    lastPayment: "Aujourd'hui",
    commercial: "Jean Kouadio",
    status: "active",
  },
];

export default function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedKit, setSelectedKit] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.phone.includes(searchQuery) ||
      client.orderNumber.includes(searchQuery);
    const matchesKit = selectedKit === "all" || client.kit === selectedKit;
    const matchesStatus =
      selectedStatus === "all" || client.status === selectedStatus;
    return matchesSearch && matchesKit && matchesStatus;
  });

  const totalClients = clients.length;
  const activeClients = clients.filter((c) => c.status === "active").length;
  const completedClients = clients.filter((c) => c.status === "completed").length;
  const totalAmount = clients.reduce(
    (sum, c) => sum + parseInt(c.totalPaid.replace(/\s/g, "")),
    0
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gestion des Clients
          </h1>
          <p className="text-gray-600">
            Gérez et consultez tous vos clients et leurs souscriptions
          </p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
          <Plus className="w-5 h-5" />
          <span className="font-medium">Nouveau Client</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Clients</p>
              <p className="text-3xl font-bold text-gray-900">{totalClients}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Clients Actifs</p>
              <p className="text-3xl font-bold text-green-600">{activeClients}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-xl">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Complétés</p>
              <p className="text-3xl font-bold text-purple-600">{completedClients}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-xl">
              <Package className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Montant Total</p>
              <p className="text-2xl font-bold text-gray-900">
                {totalAmount.toLocaleString()} FCFA
              </p>
            </div>
            <div className="p-3 bg-orange-50 rounded-xl">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher par nom, téléphone ou numéro d'ordre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Kit Filter */}
          <select
            value={selectedKit}
            onChange={(e) => setSelectedKit(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Tous les kits</option>
            <option value="Kit Premium">Kit Premium</option>
            <option value="Kit Standard">Kit Standard</option>
            <option value="Kit Basic">Kit Basic</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Tous les statuts</option>
            <option value="active">Actif</option>
            <option value="completed">Complété</option>
          </select>

          {/* Export Button */}
          <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
            <Download className="w-5 h-5" />
            <span>Exporter</span>
          </button>
        </div>
      </div>

      {/* Clients Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  N° Ordre
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Kit
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Progression
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Commercial
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Dernier Versement
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredClients.map((client) => (
                <tr
                  key={client.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-mono text-sm font-semibold text-gray-900">
                      #{client.orderNumber}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {client.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {client.name}
                        </p>
                        <p className="text-sm text-gray-500 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {client.location}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      {client.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      client.kit === "Kit Premium"
                        ? "bg-yellow-100 text-yellow-800"
                        : client.kit === "Kit Standard"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}>
                      {client.kit}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">
                          {client.totalPaid} / {client.target} FCFA
                        </span>
                        <span className="font-semibold text-gray-900">
                          {client.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${
                            client.progress === 100
                              ? "bg-gradient-to-r from-green-400 to-green-600"
                              : "bg-gradient-to-r from-blue-400 to-purple-600"
                          }`}
                          style={{ width: `${client.progress}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {client.commercial}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {client.lastPayment}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors group">
                      <Eye className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredClients.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Aucun client trouvé</p>
          </div>
        )}
      </div>
    </div>
  );
}