import { isVolunteering } from "Helper/getType";
import { useMyContext } from "./MyContext";
import ProPage from "./Pages/ProPage";
import VolunteeringPage from "./Pages/VolunteeringPage";

const PAGES = {
  pro: <ProPage />,
  volunteering: <VolunteeringPage />,
};

const getPage = () => {
  const pageKey = isVolunteering() ? "volunteering" : "pro";

  return PAGES[pageKey];
};

const AppRoutes = () => {
  const { loading } = useMyContext();
  if (loading) return <>Loading</>;

  return getPage();
};

export default AppRoutes;
