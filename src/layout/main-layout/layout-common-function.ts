//@ts-ignore
import { useStore } from "vuex";
function closeSidebar() {
  const store = useStore();
  store.dispatch("updateSidebarVisibleValue", false);
}
export { closeSidebar };
