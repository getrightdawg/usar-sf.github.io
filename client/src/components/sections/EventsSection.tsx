import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "@/components/ui/modal";

interface EventDetail {
  title: string;
  description: string;
  mechanics: {
    duration?: string;
    participants?: string;
    awards?: string;
    objective?: string;
    rules?: string[];
  };
  activeInfo: {
    title: string;
    location?: string;
    status: string;
    statusColor: string;
  };
}

const DeploymentIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-sf-gray">
    <path d="M24 4L44 14V34L24 44L4 34V14L24 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M24 16L32 20V28L24 32L16 28V20L24 16Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
    <circle cx="24" cy="24" r="2" fill="currentColor" />
  </svg>
);

const OperationsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-sf-gray">
    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M24 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 32V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 24H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 24H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="4" fill="currentColor"/>
  </svg>
);

const JointExerciseIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-sf-gray">
    <circle cx="18" cy="18" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
    <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
    <path d="M24 20L28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 28L24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<EventDetail | null>(null);

  const events = [
    {
      id: "deployments",
      title: "DEPLOYMENTS",
      description: "Large-scale operations/wargames with award recognition for outstanding performance.",
      icon: DeploymentIcon,
      action: "Click to view more →",
    },
    {
      id: "mock-operations",
      title: "MOCK OPERATIONS",
      description: "Advanced combat scenarios and tactical exercises. Developing elite-level combat proficiency and team coordination.",
      icon: OperationsIcon,
      action: "Click to view more →",
    },
    {
      id: "joint-events",
      title: "JOINT EVENTS",
      description: "Events hosted with other USAR units or allies to the USAR with award recognition.",
      icon: JointExerciseIcon,
      action: "Click to view more →",
    }
  ];

  const eventDetails: Record<string, EventDetail> = {
    deployments: {
      title: "DEPLOYMENTS",
      description: "Major operational deployments that test unit cohesion and tactical proficiency in extended mission scenarios.",
      mechanics: {
        duration: "1+ hour(s)",
        participants: "All Special Forces personnel unless restricted",
        objective: "Within these events, the objective is to typically eliminate the enemy team. Rules are providied within the events by the host.",
      },
      activeInfo: {
        title: "Template Operation/Deployment",
        location: "Location/Game of the Operation/Deployment",
        status: "Active/Inactive/Scheduled",
        statusColor: "text-green-400",
      },
    },
    "mock-operations": {
      title: "MOCK OPERATIONS",
      description: "Advanced combat scenarios and tactical exercises. Developing elite-level combat proficiency and team coordination.",
      activeInfo: {
        title: "Template Mock Operation",
        location: "Location/Game of the Mock Operation",
        status: "Active/Inactive/Scheduled",
        statusColor: "text-yellow-400",
      },
      mechanics: {
        duration: "1+ hour(s)",
        participants: "All Special Forces personnel unless restricted",
        objective: "Provided by the host(s) of the Mock Operation. Can be Capture or Kill, Hostage Rescue, etc.",
      }
    },
    "joint-events": {
      title: "JOINT EVENTS",
      description: "Events hosted with other USAR units or allies to the USAR with award recognition.",
      activeInfo: {
        title: "Template Joint Event",
        location: "Location/Game of the Joint Event",
        status: "Active/Inactive/Scheduled",
        statusColor: "text-red-400",
      },
      mechanics: {
        duration: "1+ hour(s)",
        participants: "All Special Forces personnel unless restricted & USAR units or allied groups.",
        objective: "Depends on the type of Joint Event."
      }
    }
  };

  const handleEventClick = (eventId: string) => {
    setSelectedEvent(eventDetails[eventId]);
  };

  return (
    <section className="py-20 bg-asf-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-asf-dark/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-rajdhani font-black mb-6">
            FORGE THE 
            <span className="text-asf-accent"> ELITE</span>
          </h2>
          <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-asf-gray-light max-w-4xl mx-auto leading-relaxed">
            Join our intensive training programs and participate in unit
            events that will transform you into an elite Special Forces
            operator.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <motion.div
                key={event.id}
                className="group glow-border p-8 rounded-lg bg-asf-gray-dark/80 backdrop-blur-sm hover:bg-asf-dark/90 transition-all duration-500 cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleEventClick(event.id)}
                data-testid={`event-card-${event.id}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-asf-accent/10 rounded-lg mr-4 group-hover:bg-asf-accent/20 transition-colors duration-300">
                      <IconComponent />
                    </div>
                    <h3 className="text-2xl font-rajdhani font-bold text-white group-hover:text-asf-accent transition-colors duration-300">
                      {event.title}
                    </h3>
                  </div>
                  
                  <p className="text-asf-gray-light mb-6 leading-relaxed">{event.description}</p>
                  
                  <div className="flex items-center text-asf-accent font-rajdhani font-bold group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">{event.action}</span>
                    <div className="w-4 h-px bg-asf-accent"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Modal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent?.title || ""}
        size="xl"
      >
        {selectedEvent && (
          <div className="space-y-6" data-testid="event-details">
            <p className="text-asf-gray-light text-lg mb-6">{selectedEvent.description}</p>

            <div className="bg-asf-gray-dark p-6 rounded-lg border border-asf-gray">
              <h4 className="font-rajdhani font-bold text-lg text-white mb-3">Event Mechanics</h4>
              {selectedEvent.mechanics.duration && <p><strong>Duration:</strong> {selectedEvent.mechanics.duration}</p>}
              {selectedEvent.mechanics.participants && <p><strong>Participants:</strong> {selectedEvent.mechanics.participants}</p>}
              {selectedEvent.mechanics.awards && <p><strong>Awards:</strong> {selectedEvent.mechanics.awards}</p>}
              {selectedEvent.mechanics.objective && <p><strong>Objective:</strong> {selectedEvent.mechanics.objective}</p>}
              {selectedEvent.mechanics.rules && selectedEvent.mechanics.rules.length > 0 && (
                <div>
                  <strong>Rules:</strong>
                  <ul className="list-disc list-inside">
                    {selectedEvent.mechanics.rules.map((rule, idx) => (
                      <li key={idx}>{rule}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
          </div>
        )}
      </Modal>
    </section>
  );
}