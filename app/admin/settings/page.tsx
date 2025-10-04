"use client";

import { useState } from "react";
import {
  Settings,
  User,
  Bell,
  Shield,
  Database,
  Palette,
  Globe,
  Save,
  Download,
  Upload,
  RefreshCw,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profil", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Sécurité", icon: Shield },
    { id: "data", label: "Données", icon: Database },
    { id: "appearance", label: "Apparence", icon: Palette },
    { id: "language", label: "Langue", icon: Globe },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Paramètres</h1>
        <p className="text-gray-600">
          Gérez les paramètres de votre compte et de l'application
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Informations du Profil
                </h2>

                <div className="flex items-center space-x-6 pb-6 border-b border-gray-200">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    AD
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium">
                      Changer la photo
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      defaultValue="Administrateur"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="admin@collecte.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      defaultValue="+225 07 12 34 56 78"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rôle
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Administrateur</option>
                      <option>Commercial</option>
                      <option>Superviseur</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end pt-6 border-t border-gray-200">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
                    <Save className="w-5 h-5" />
                    <span className="font-medium">Enregistrer</span>
                  </button>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Préférences de Notification
                </h2>

                <div className="space-y-4">
                  {[
                    { title: "Nouveaux versements", desc: "Recevoir une notification pour chaque nouveau versement" },
                    { title: "Nouveaux clients", desc: "Notification lors de l'ajout d'un nouveau client" },
                    { title: "Objectifs atteints", desc: "Alerte quand un client atteint son objectif" },
                    { title: "Rapports hebdomadaires", desc: "Recevoir un résumé hebdomadaire par email" },
                    { title: "Alertes système", desc: "Notifications importantes sur le système" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Sécurité et Confidentialité
                </h2>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Changer le mot de passe</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mot de passe actuel
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nouveau mot de passe
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirmer le mot de passe
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
                      Mettre à jour le mot de passe
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Sessions actives</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-green-50 border border-green-200">
                      <div>
                        <p className="font-semibold text-gray-900">Session actuelle</p>
                        <p className="text-sm text-gray-600">Windows • Chrome • Abidjan, CI</p>
                      </div>
                      <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-medium">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Data Tab */}
            {activeTab === "data" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Gestion des Données
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="flex items-center space-x-4 p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-500 transition-colors">
                      <Download className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Exporter les données</p>
                      <p className="text-sm text-gray-600">Télécharger toutes vos données</p>
                    </div>
                  </button>

                  <button className="flex items-center space-x-4 p-6 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all group">
                    <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-500 transition-colors">
                      <Upload className="w-6 h-6 text-green-600 group-hover:text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Importer des données</p>
                      <p className="text-sm text-gray-600">Charger des données depuis un fichier</p>
                    </div>
                  </button>

                  <button className="flex items-center space-x-4 p-6 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all group">
                    <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-500 transition-colors">
                      <RefreshCw className="w-6 h-6 text-purple-600 group-hover:text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Synchroniser</p>
                      <p className="text-sm text-gray-600">Synchroniser avec les appareils mobiles</p>
                    </div>
                  </button>

                  <button className="flex items-center space-x-4 p-6 border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all group">
                    <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-500 transition-colors">
                      <Database className="w-6 h-6 text-orange-600 group-hover:text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Sauvegarde</p>
                      <p className="text-sm text-gray-600">Créer une sauvegarde complète</p>
                    </div>
                  </button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Toutes les données sont stockées de manière sécurisée et
                    chiffrées. Les sauvegardes sont effectuées automatiquement tous les jours.
                  </p>
                </div>
              </div>
            )}

            {/* Appearance Tab */}
            {activeTab === "appearance" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Apparence</h2>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Thème</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { id: "light", label: "Clair", color: "bg-white" },
                      { id: "dark", label: "Sombre", color: "bg-gray-900" },
                      { id: "auto", label: "Automatique", color: "bg-gradient-to-r from-white to-gray-900" },
                    ].map((theme) => (
                      <button
                        key={theme.id}
                        className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-all"
                      >
                        <div className={`w-full h-20 ${theme.color} rounded-lg mb-3 border border-gray-300`}></div>
                        <p className="font-medium text-gray-900">{theme.label}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Language Tab */}
            {activeTab === "language" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Langue et Région
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Langue de l'interface
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Français</option>
                      <option>English</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fuseau horaire
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>GMT (Abidjan)</option>
                      <option>UTC+1 (Paris)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Format de devise
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>FCFA (Franc CFA)</option>
                      <option>EUR (Euro)</option>
                      <option>USD (Dollar)</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end pt-6 border-t border-gray-200">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
                    <Save className="w-5 h-5" />
                    <span className="font-medium">Enregistrer</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}