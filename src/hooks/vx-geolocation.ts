import { onUnmounted, ref } from "vue";

export default function useGeolocation(opts?: PositionOptions) {
  const geolocationRef = navigator.geolocation;
  let watcherId: undefined | number = undefined;
  const position = ref<GeolocationPosition | undefined>();
  const error = ref<GeolocationPositionError | undefined>();

  watcherId = geolocationRef.watchPosition(
    (posi) => (position.value = posi),
    (positionError) => (error.value = positionError),
    { ...opts }
  );

  onUnmounted(() => {
    typeof watcherId === "number" && geolocationRef.clearWatch(watcherId);
  });

  return {
    position,
    error,
  };
}
