import {
  Users,
  Package,
  TrendingUp,
  DollarSign,
  Calendar,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Clients",
    value: "1,847",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Versements Aujourd'hui",
    value: "245 000 FCFA",
    change: "+8.2%",
    trend: "up",
    icon: DollarSign,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Kits Actifs",
    value: "12",
    change: "+2",
    trend: "up",
    icon: Package,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Taux de Collecte",
    value: "87.3%",
    change: "-2.1%",
    trend: "down",
    icon: TrendingUp,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
  },
];

const recentPayments = [
  {
    id: 1,
    client: "Jean Kouassi",
    amount: "15 000",
    kit: "Kit Premium",
    date: "Aujourd'hui 14:30",
    commercial: "Marie D.",
  },
  {
    id: 2,
    client: "Aya Traoré",
    amount: "25 000",
    kit: "Kit Standard",
    date: "Aujourd'hui 13:15",
    commercial: "Jean K.",
  },
  {
    id: 3,
    client: "Kofi Mensah",
    amount: "10 000",
    kit: "Kit Basic",
    date: "Aujourd'hui 11:45",
    commercial: "Marie D.",
  },
  {
    id: 4,
    client: "Fatou Diallo",
    amount: "20 000",
    kit: "Kit Premium",
    date: "Aujourd'hui 10:20",
    commercial: "Pierre B.",
  },
  {
    id: 5,
    client: "Ibrahim Sow",
    amount: "12 000",
    kit: "Kit Standard",
    date: "Aujourd'hui 09:00",
    commercial: "Marie D.",
  },
];

const topCommercials = [
  {
    name: "Marie Diop",
    clients: 287,
    amount: "3 450 000",
    progress: 92,
    avatar: "MD",
    color: "from-pink-400 to-rose-500",
  },
  {
    name: "Jean Kouadio",
    clients: 243,
    amount: "2 890 000",
    progress: 78,
    avatar: "JK",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "Pierre Bamba",
    clients: 198,
    amount: "2 120 000",
    progress: 65,
    avatar: "PB",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Aminata Sy",
    clients: 156,
    amount: "1 670 000",
    progress: 54,
    avatar: "AS",
    color: "from-purple-400 to-violet-500",
  },
];

const kitStats = [
  { name: "Kit Premium", count: 456, amount: "4 560 000", color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
  { name: "Kit Standard", count: 823, amount: "3 292 000", color: "bg-gradient-to-r from-blue-400 to-indigo-500" },
  { name: "Kit Basic", count: 568, amount: "1 704 000", color: "bg-gradient-to-r from-green-400 to-teal-500" },
];

export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Tableau de bord
        </h1>
        <p className="text-gray-600">
          Vue d'ensemble de vos activités de collecte - Saison 2025
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <Icon className={`w-6 h-6 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  {stat.change}
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 ml-1" />
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600">{stat.title}</p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Payments */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Derniers Versements
            </h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Voir tout
            </button>
          </div>
          <div className="space-y-4">
            {recentPayments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {payment.client.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {payment.client}
                    </p>
                    <p className="text-sm text-gray-500">
                      {payment.kit} • {payment.commercial}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">
                    +{payment.amount} FCFA
                  </p>
                  <p className="text-sm text-gray-500">{payment.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Commercials */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Top Commerciaux
          </h2>
          <div className="space-y-4">
            {topCommercials.map((commercial, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${commercial.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                      {commercial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {commercial.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {commercial.clients} clients
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-gray-900">
                    {commercial.amount}
                  </p>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${commercial.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${commercial.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kits Statistics */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Statistiques par Kit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kitStats.map((kit, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl p-6 text-white group hover:scale-105 transition-transform duration-300"
            >
              <div className={`absolute inset-0 ${kit.color} opacity-90`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Package className="w-8 h-8" />
                  <Activity className="w-6 h-6 opacity-70" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{kit.count}</h3>
                <p className="text-sm opacity-90 mb-3">{kit.name}</p>
                <div className="pt-3 border-t border-white/20">
                  <p className="text-lg font-semibold">{kit.amount} FCFA</p>
                  <p className="text-xs opacity-75">Total collecté</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
          <Users className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
          <p className="font-semibold">Nouveau Client</p>
        </button>
        <button className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
          <DollarSign className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
          <p className="font-semibold">Enregistrer Versement</p>
        </button>
        <button className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
          <Package className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
          <p className="font-semibold">Gérer Kits</p>
        </button>
        <button className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
          <Calendar className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
          <p className="font-semibold">Nouvelle Saison</p>
        </button>
      </div>
    </div>
  );
}
