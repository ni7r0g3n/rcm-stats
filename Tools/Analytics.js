class Analytics {
  event(eventType) {
    fetch(
      "https://194-233-174-64.ip.linodeusercontent.com/stats?event=" +
        eventType,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
