import { useMenu } from "@/providers/ProfileMenuStateProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useProfileMenuController = () => {
  // menu state
  const { setIsMenuOpen } = useMenu();
  // router
  const router = useRouter();

  // func for back to profile page and open the menu
  const backToProfilePage = () => {
    router.push("/profile");
    setIsMenuOpen(true);
  };

  // When the page is fully opened, the menu is closed
  useEffect(() => {
    const onPageLoad = () => {
      setIsMenuOpen(false);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    }
  }, []);

  return { backToProfilePage };
};

export default useProfileMenuController;
