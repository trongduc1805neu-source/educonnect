import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "./ui/button";
import { useAuth } from "../contexts/AuthContext";
import { LoginModal } from "./LoginModal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userData, logout } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [intendedRole, setIntendedRole] = useState<"student" | "tutor">(
    "student",
  );

  const openLoginModal = (role: "student" | "tutor") => {
    setIntendedRole(role);
    setIsLoginModalOpen(true);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#FDFBF7]/80 backdrop-blur-md border-b border-zinc-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center font-bold text-white shadow-sm group-hover:scale-105 transition-transform">
                <FontAwesomeIcon icon={["fas", "graduation-cap"]} />
              </div>
              <span className="font-bold text-xl text-zinc-900 tracking-tight">
                Edu<span className="text-zinc-800">Connect</span>
              </span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link
                to="/find-tutor"
                className="text-zinc-500 hover:text-zinc-900 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                Tìm Gia Sư
              </Link>
              <Link
                to="/find-class"
                className="text-zinc-500 hover:text-zinc-900 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                Nhận Lớp
              </Link>
              <Link
                to="/become-tutor"
                className="text-zinc-500 hover:text-zinc-900 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                Trở thành Gia Sư
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-zinc-900 hover:text-zinc-900 transition-colors bg-zinc-50 hover:bg-zinc-100 px-3 py-1.5 rounded-full border border-zinc-200"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Avatar"
                      className="w-7 h-7 rounded-full border border-zinc-200 object-cover"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900">
                      <FontAwesomeIcon
                        icon={["fas", "user"]}
                        className="w-4 h-4"
                      />
                    </div>
                  )}
                  <span className="text-sm font-semibold">
                    {userData?.displayName || user.displayName || "User"}
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={logout}
                  className="text-zinc-500 hover:text-zinc-600 hover:bg-zinc-50 rounded-full"
                  title="Đăng xuất"
                >
                  <FontAwesomeIcon
                    icon={["fas", "right-from-bracket"]}
                    className="w-5 h-5"
                  />
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => openLoginModal("student")}
                >
                  Đăng nhập
                </Button>
                <Button
                  variant="outline"
                  className="border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                  onClick={() => openLoginModal("tutor")}
                >
                  Đăng nhập Gia sư
                </Button>
                <Button onClick={() => openLoginModal("student")}>
                  Đăng ký
                </Button>
              </>
            )}
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <FontAwesomeIcon
                  icon={["fas", "xmark"]}
                  className="block h-6 w-6"
                />
              ) : (
                <FontAwesomeIcon
                  icon={["fas", "bars"]}
                  className="block h-6 w-6"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-zinc-200 shadow-sm absolute w-full">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/find-tutor"
              className="text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 block px-4 py-3 rounded-md text-base font-semibold transition-colors"
            >
              Tìm Gia Sư
            </Link>
            <Link
              to="/find-class"
              className="text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 block px-4 py-3 rounded-md text-base font-semibold transition-colors"
            >
              Nhận Lớp
            </Link>
            <Link
              to="/become-tutor"
              className="text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 block px-4 py-3 rounded-md text-base font-semibold transition-colors"
            >
              Trở thành Gia Sư
            </Link>
          </div>
          <div className="pt-4 pb-4 border-t border-zinc-200">
            {user ? (
              <div className="flex flex-col px-6 space-y-4">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-3 text-zinc-900 hover:text-zinc-900 transition-colors py-2"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full border border-zinc-200 object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900">
                      <FontAwesomeIcon
                        icon={["fas", "user"]}
                        className="w-5 h-5"
                      />
                    </div>
                  )}
                  <span className="text-base font-semibold">
                    {userData?.displayName || user.displayName || "User"}
                  </span>
                </Link>
                <Button
                  variant="outline"
                  onClick={logout}
                  className="w-full text-zinc-600 border-zinc-200 hover:bg-zinc-50 font-semibold justify-center"
                >
                  <FontAwesomeIcon
                    icon={["fas", "right-from-bracket"]}
                    className="w-5 h-5 mr-2"
                  />{" "}
                  Đăng xuất
                </Button>
              </div>
            ) : (
              <div className="flex flex-col px-6 space-y-3">
                <Button
                  variant="outline"
                  onClick={() => setIsLoginModalOpen(true)}
                  className="w-full"
                >
                  Đăng nhập
                </Button>
                <Button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="w-full"
                >
                  Đăng ký
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </nav>
  );
}
