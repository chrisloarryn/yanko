"use client";

type EventPayload = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: "event", eventName: string, params?: Record<string, unknown>) => void;
  }
}

export function trackEvent(eventName: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;

  const eventData = {
    event: eventName,
    timestamp: Date.now(),
    ...payload,
  };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventData);
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  try {
    window.localStorage.setItem("yanko-last-event", JSON.stringify(eventData));
  } catch {
    // ignore storage errors
  }
}
