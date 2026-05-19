/** Cat 히어로·상호작용 이미지 — 로드+디코딩 완료 후 전환용 캐시 */
const ready = new Set<string>();
const inflight = new Map<string, Promise<void>>();

function loadAndDecode(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";

    img.onload = () => {
      const finish = () => {
        ready.add(src);
        resolve();
      };

      if (typeof img.decode === "function") {
        void img.decode().then(finish).catch(finish);
        return;
      }
      finish();
    };

    img.onerror = () => {
      reject(new Error(`Failed to preload: ${src}`));
    };

    img.src = src;
  });
}

export function isCatImageReady(src: string): boolean {
  return ready.has(src);
}

/** 이미 준비됐으면 즉시 resolve, 아니면 로드·디코딩 후 resolve */
export function ensureCatImageReady(src: string): Promise<void> {
  if (ready.has(src)) {
    return Promise.resolve();
  }

  const pending = inflight.get(src);
  if (pending) {
    return pending;
  }

  const promise = loadAndDecode(src).finally(() => {
    inflight.delete(src);
  });
  inflight.set(src, promise);
  return promise;
}

export function preloadCatImages(sources: readonly string[]): Promise<void> {
  return Promise.all(sources.map(ensureCatImageReady)).then(() => undefined);
}
