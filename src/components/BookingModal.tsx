import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Scissors, User, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const services = [
  { id: "corte-mujer", name: "Corte Mujer", duration: "45 min" },
  { id: "corte-hombre", name: "Corte Hombre", duration: "30 min" },
  { id: "coloracion", name: "Coloración Completa", duration: "90 min" },
  { id: "mechas", name: "Mechas / Balayage", duration: "120 min" },
  { id: "tratamiento", name: "Tratamiento Capilar", duration: "60 min" },
  { id: "peinado", name: "Peinado / Estilismo", duration: "45 min" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPrivacy: () => void;
}

export function BookingModal({ isOpen, onClose, onOpenPrivacy }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyConsent) return;
    // Here you would integrate with your booking system
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      setFormData({ service: "", date: "", time: "", name: "", phone: "" });
      setPrivacyConsent(false);
      onClose();
    }, 3000);
  };

  const canProceedStep1 = formData.service && formData.date && formData.time;
  const canProceedStep2 = formData.name && formData.phone && privacyConsent;

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-secondary/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg bg-cream rounded-xl shadow-elegant z-50 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="bg-secondary px-6 py-5 flex items-center justify-between">
              <div>
                <h2 className="font-display text-xl font-semibold text-cream">
                  Reserva tu Cita
                </h2>
                <p className="text-cream/60 text-sm mt-1">
                  {isSubmitted
                    ? "¡Reserva confirmada!"
                    : step === 1
                    ? "Selecciona servicio y horario"
                    : "Tus datos de contacto"}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-cream/60 hover:text-cream transition-colors"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4 shadow-gold">
                    <Check className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-secondary mb-2">
                    ¡Cita Reservada!
                  </h3>
                  <p className="text-muted-foreground">
                    Te contactaremos pronto para confirmar tu reserva.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Service & Time */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      {/* Service Select */}
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2 text-secondary">
                          <Scissors size={16} className="text-gold" />
                          Servicio
                        </Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData({ ...formData, service: value })
                          }
                        >
                          <SelectTrigger className="h-12 border-border focus:ring-gold">
                            <SelectValue placeholder="Selecciona un servicio" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.id} value={service.id}>
                                <span className="flex justify-between w-full gap-4">
                                  {service.name}
                                  <span className="text-muted-foreground text-sm">
                                    ({service.duration})
                                  </span>
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Date Picker */}
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2 text-secondary">
                          <Calendar size={16} className="text-gold" />
                          Fecha
                        </Label>
                        <Input
                          type="date"
                          min={today}
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          className="h-12 border-border focus:ring-gold"
                        />
                      </div>

                      {/* Time Slots */}
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2 text-secondary">
                          <Clock size={16} className="text-gold" />
                          Hora
                        </Label>
                        <div className="grid grid-cols-4 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() =>
                                setFormData({ ...formData, time })
                              }
                              className={`py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
                                formData.time === time
                                  ? "bg-gradient-gold text-primary-foreground shadow-gold"
                                  : "bg-muted text-muted-foreground hover:bg-gold/10 hover:text-gold"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      <Button
                        type="button"
                        variant="gold"
                        size="xl"
                        className="w-full"
                        disabled={!canProceedStep1}
                        onClick={() => setStep(2)}
                      >
                        Continuar
                      </Button>
                    </motion.div>
                  )}

                  {/* Step 2: Contact Info */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      {/* Name */}
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2 text-secondary">
                          <User size={16} className="text-gold" />
                          Nombre Completo
                        </Label>
                        <Input
                          type="text"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="h-12 border-border focus:ring-gold"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2 text-secondary">
                          <Phone size={16} className="text-gold" />
                          Teléfono
                        </Label>
                        <Input
                          type="tel"
                          placeholder="+34 600 000 000"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="h-12 border-border focus:ring-gold"
                        />
                      </div>

                      {/* Summary */}
                      <div className="bg-muted rounded-lg p-4">
                        <h4 className="font-semibold text-secondary mb-2 text-sm">
                          Resumen de tu cita:
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          <strong>Servicio:</strong>{" "}
                          {services.find((s) => s.id === formData.service)?.name}
                          <br />
                          <strong>Fecha:</strong>{" "}
                          {new Date(formData.date).toLocaleDateString("es-ES", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                          <br />
                          <strong>Hora:</strong> {formData.time}
                        </p>
                      </div>

                      {/* RGPD Consent */}
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="privacy-consent"
                          checked={privacyConsent}
                          onCheckedChange={(checked) => setPrivacyConsent(checked === true)}
                          className="mt-0.5 border-border data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                        />
                        <label
                          htmlFor="privacy-consent"
                          className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                        >
                          He leído y acepto la{" "}
                          <button
                            type="button"
                            onClick={onOpenPrivacy}
                            className="text-gold hover:underline font-medium"
                          >
                            Política de Privacidad
                          </button>{" "}
                          y consiento el tratamiento de mis datos personales para gestionar mi cita.
                        </label>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant="outline-gold"
                          size="xl"
                          className="flex-1"
                          onClick={() => setStep(1)}
                        >
                          Volver
                        </Button>
                        <Button
                          type="submit"
                          variant="gold"
                          size="xl"
                          className="flex-1"
                          disabled={!canProceedStep2}
                        >
                          Confirmar Cita
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
