import {
  Building2,
  FileCheck2,
  Landmark,
  PenTool,
  UserRoundCog,
} from "lucide-react";

import "./Services.css";

const services = [
  { icon: FileCheck2, title: "Legal Assistance", subtitle: "& Documentation" },
  { icon: Landmark, title: "Bank Loans", subtitle: "& Financial Support" },
  { icon: FileCheck2, title: "Plot Registration", subtitle: "& Handover" },
  { icon: PenTool, title: "Construction", subtitle: "Guidance" },
  { icon: UserRoundCog, title: "Property", subtitle: "Management" },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-layout container">
        <div className="services-intro">
          <p className="eyebrow section-label-dark">Our Services</p>

          <h2 className="display services-title">
            End-to-End Support
            <br />
            for Your Investment
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div className="service-card" key={service.title}>
                <Icon size={36} strokeWidth={1.4} />
                <span>
                  {service.title}
                  <br />
                  {service.subtitle}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
