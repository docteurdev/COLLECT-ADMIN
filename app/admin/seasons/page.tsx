"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Plus,
  Edit,
  Trash2,
  Clock,
  TrendingUp,
  Users,
  Package,
  X,
  Check,
  AlertCircle,
} from "lucide-react";
import { getAllSeasons, createSeason, updateSeason, deleteSeason, Season } from "@/lib/api/seasons";

export default function SeasonsPage() {
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  
  // Formulaire
  const [formData, setFormData] = useState({
    label: "",
    start: "",
    end: "",
  });

  // Charger les saisons au montage du composant
  useEffect(() => {
    loadSeasons();
  }, []);

  const loadSeasons = async () => {
    try {
      setLoading(true);
      const data = await getAllSeasons();
      setSeasons(data);
      setError("");
    } catch (err) {
      setError("Erreur lors du chargement des saisons");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateSeason = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createSeason({
        label: formData.label,
        start: new Date(formData.start).toISOString(),
        end: new Date(formData.end).toISOString(),
      });
      setSuccess("Saison créée avec succès");
      setShowCreateModal(false);
      resetForm();
      loadSeasons();
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Erreur lors de la création de la saison");
      console.error(err);
    }
  };

  const handleUpdateSeason = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSeason?.id) return;
    
    try {
      await updateSeason(selectedSeason.id, {
        label: formData.label,
        start: new Date(formData.start).toISOString(),
        end: new Date(formData.end).toISOString(),
      });
      setSuccess("Saison mise à jour avec succès");
      setShowEditModal(false);
      setSelectedSeason(null);
      resetForm();
      loadSeasons();
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Erreur lors de la mise à jour de la saison");
      console.error(err);
    }
  };

  const handleDeleteSeason = async () => {
    if (!selectedSeason?.id) return;
    
    try {
      await deleteSeason(selectedSeason.id);
      setSuccess("Saison supprimée avec succès");
      setShowDeleteModal(false);
      setSelectedSeason(null);
      loadSeasons();
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Erreur lors de la suppression de la saison");
      console.error(err);
    }
  };

  const openEditModal = (season: Season) => {
    setSelectedSeason(season);
    setFormData({
      label: season.label,
      start: season.start.split('T')[0],
      end: season.end.split('T')[0],
    });
    setShowEditModal(true);
  };

  const openDeleteModal = (season: Season) => {
    setSelectedSeason(season);
    setShowDeleteModal(true);
  };

  const resetForm = () => {
    setFormData({
      label: "",
      start: "",
      end: "",
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const isSeasonActive = (season: Season) => {
    const now = new Date();
    const start = new Date(season.start);
    const end = new Date(season.end);
    return now >= start && now <= end;
  };

  const isSeasonUpcoming = (season: Season) => {
    const now = new Date();
    const start = new Date(season.start);
    return now < start;
  };

  const activeSeasons = seasons.filter(isSeasonActive).length;
  const upcomingSeasons = seasons.filter(isSeasonUpcoming).length;
  const pastSeasons = seasons.length - activeSeasons - upcomingSeasons;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Messages de succès et d'erreur */}
      {success && (
        <div className="fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2 animate-in slide-in-from-top duration-300">
          <Check className="w-5 h-5" />
          <span>{success}</span>
        </div>
      )}
      
      {error && (
        <div className="fixed top-20 right-4 z-50 bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2 animate-in slide-in-from-top duration-300">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Gestion des Saisons
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Créez et gérez les saisons de collecte pour votre entreprise
          </p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setShowCreateModal(true);
          }}
          className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Nouvelle Saison</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-xs sm:text-sm mb-1">Total Saisons</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">{seasons.length}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-xs sm:text-sm mb-1">Saisons Actives</p>
              <p className="text-2xl sm:text-3xl font-bold text-green-600">{activeSeasons}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-xl">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-xs sm:text-sm mb-1">À Venir</p>
              <p className="text-2xl sm:text-3xl font-bold text-orange-600">{upcomingSeasons}</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-xl">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-xs sm:text-sm mb-1">Terminées</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-600">{pastSeasons}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl">
              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Seasons List */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : seasons.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucune saison</h3>
          <p className="text-gray-500 mb-6">Commencez par créer votre première saison de collecte</p>
          <button
            onClick={() => {
              resetForm();
              setShowCreateModal(true);
            }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
            <span>Créer une Saison</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {seasons.map((season) => {
            const active = isSeasonActive(season);
            const upcoming = isSeasonUpcoming(season);
            const status = active ? 'active' : upcoming ? 'upcoming' : 'past';

            return (
              <div
                key={season.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                {/* Season Header */}
                <div className={`p-4 sm:p-6 relative overflow-hidden ${
                  status === 'active'
                    ? 'bg-gradient-to-br from-green-400 to-emerald-600'
                    : status === 'upcoming'
                    ? 'bg-gradient-to-br from-orange-400 to-amber-600'
                    : 'bg-gradient-to-br from-gray-400 to-slate-600'
                } text-white`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        status === 'active'
                          ? 'bg-white/20 backdrop-blur-sm'
                          : status === 'upcoming'
                          ? 'bg-white/20 backdrop-blur-sm'
                          : 'bg-white/20 backdrop-blur-sm'
                      }`}>
                        {status === 'active' ? 'Active' : status === 'upcoming' ? 'À venir' : 'Terminée'}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{season.label}</h3>
                    <p className="text-xs sm:text-sm opacity-90">Saison de collecte</p>
                  </div>
                </div>

                {/* Season Details */}
                <div className="p-4 sm:p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Début
                      </span>
                      <span className="font-semibold text-gray-900">
                        {formatDate(season.start)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Fin
                      </span>
                      <span className="font-semibold text-gray-900">
                        {formatDate(season.end)}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => openEditModal(season)}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      <span className="text-sm font-medium">Modifier</span>
                    </button>
                    <button
                      onClick={() => openDeleteModal(season)}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="text-sm font-medium">Supprimer</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Create Season Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 animate-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Nouvelle Saison
              </h3>
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  resetForm();
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateSeason} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de la saison *
                </label>
                <input
                  type="text"
                  required
                  value={formData.label}
                  onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                  placeholder="Ex: Saison 2025"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de début *
                </label>
                <input
                  type="date"
                  required
                  value={formData.start}
                  onChange={(e) => setFormData({ ...formData, start: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de fin *
                </label>
                <input
                  type="date"
                  required
                  value={formData.end}
                  onChange={(e) => setFormData({ ...formData, end: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    resetForm();
                  }}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all"
                >
                  Créer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Season Modal */}
      {showEditModal && selectedSeason && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 animate-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Modifier la Saison
              </h3>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setSelectedSeason(null);
                  resetForm();
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleUpdateSeason} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de la saison *
                </label>
                <input
                  type="text"
                  required
                  value={formData.label}
                  onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                  placeholder="Ex: Saison 2025"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de début *
                </label>
                <input
                  type="date"
                  required
                  value={formData.start}
                  onChange={(e) => setFormData({ ...formData, start: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de fin *
                </label>
                <input
                  type="date"
                  required
                  value={formData.end}
                  onChange={(e) => setFormData({ ...formData, end: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowEditModal(false);
                    setSelectedSeason(null);
                    resetForm();
                  }}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all"
                >
                  Modifier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedSeason && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 animate-in zoom-in duration-200">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-2">
              Supprimer la Saison
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Êtes-vous sûr de vouloir supprimer la saison <strong>{selectedSeason.label}</strong> ? 
              Cette action est irréversible.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedSeason(null);
                }}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleDeleteSeason}
                className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}