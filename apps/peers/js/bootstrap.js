/*
var a = new MozActivity({
    name: 'share',
    data: {
      type: type,
      number: blobs.length,
      blobs: blobs,
      filenames: names,
      filepaths: fullpaths
    }
  });
  */

const kDeps = [
  {
    name: "main",
    kind: "virtual",
    deps: [
      "shared-fluent",
      "shoelace-light-theme",
      "shoelace-setup",
      "shoelace-progress-bar",
      "shoelace-qr-code",
      "shoelace-button",
    ],
  },
  {
    name: "api daemon core",
    kind: "sharedWindowModule",
    param: ["js/api_daemon.js", "apiDaemon", "ApiDaemon"],
  },
  {
    name: "activity manager",
    kind: "sharedModule",
    param: ["js/activity_manager.js", ["ActivityManager"]],
  },
];

function log(msg) {
  console.log(`PeersApp: ${msg}`);
}

document.addEventListener("DOMContentLoaded", async () => {
  console.log(`DOMContentLoaded`);
  await depGraphLoaded;
  graph = new ParallelGraphLoader(addSharedDeps(addShoelaceDeps(kDeps)));

  await graph.waitForDeps("activity manager");
  // Configure activity handlers.
  let _activities = new ActivityManager({
    share: onShare,
  });

  await graph.waitForDeps("main");

  log(`location hash: ${location.hash}`);
  if (location.hash == "") {
    log(`No activity...`);
  } else {
    document.getElementById("bye-bye").onclick = () => {
      window.close();
    };
  }
});

// Share some content:
// - POST it to the local ipfs node.
// - Create a QR Code with the ipfs url.
async function onShare(data) {
  log(`onShare: ${JSON.stringify(data)}`);

  if (data.blob) {
    log(`onShare: ${data.blob.type} ${data.blob.size}`);
  }

  let progress = document.getElementById("progress-bar");

  try {
    document
      .getElementById("description")
      .setAttribute(
        "data-l10n-args",
        JSON.stringify({ name: data.name || "" })
      );
    document.getElementById("share").classList.remove("hidden");
    progress.setAttribute("indeterminate", "");
    const url = "ipfs://localhost/ipfs";
    let body = await data.blob.arrayBuffer();
    log(`Body is ${body}`);
    let response = await fetch(url, {
      method: "POST",
      body,
    });
    log(response.status);

    progress.removeAttribute("indeterminate");
    document.getElementById("qr-code").value = response.headers.get("location");
  } catch (e) {
    // Cleanup.
    progress.removeAttribute("indeterminate");
    log(e);
    console.error(e);
  }

  return new Promise(async (resolve, reject) => {
    resolve();
  });
}
