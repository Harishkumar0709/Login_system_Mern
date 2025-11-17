import React from "react";

export default function RequestedServices() {
  return (
    <div className="bg-pink-100 p-6 rounded-2xl mt-6">
      <h2 className="text-xl font-bold text-red-500 mb-4">
        Requested Services
      </h2>

      <div className="grid grid-cols-3 gap-6 text-sm">
        <div>
          <h3 className="font-bold text-red-500 mb-1">AWS</h3>
          <ul className="space-y-1">
            <li>AWS S3</li>
            <li>AWS EC2</li>
            <li>AWS CloudFront</li>
            <li>AWS Route53</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-red-500 mb-1">GCP</h3>
          <ul className="space-y-1">
            <li>GCP IAM</li>
            <li>GCP Compute Engine</li>
            <li>Cloud CDN</li>
            <li>Cloud Speech API</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-red-500 mb-1">Azure</h3>
          <ul className="space-y-1">
            <li>Azure Container Registry</li>
            <li>Azure VM Scale Sets</li>
            <li>Azure App Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
