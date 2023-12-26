import { useRouter } from "next/navigation";
import { useState } from "react";

const useProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const backToProfilePage = () => {
    setIsMenuOpen(false);
    router.push("/profile");
  };

  //   useEffect(() => {
  //     setIsMenuOpen(true);
  //   }, []);

  return { isMenuOpen, setIsMenuOpen, backToProfilePage };
};

export default useProfileMenu;
