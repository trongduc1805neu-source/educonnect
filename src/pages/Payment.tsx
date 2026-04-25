import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CreditCard, CheckCircle2, QrCode } from "lucide-react";
import { Button } from "../components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

export function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const paymentState =
    (location.state as { type: "tutor" | "class" | "wallet"; data: any }) ||
    null;

  const [customAmount, setCustomAmount] = useState("500000");

  const title =
    paymentState?.type === "tutor"
      ? `Kết nối gia sư: ${paymentState.data.name}`
      : paymentState?.type === "class"
        ? `Đăng ký lớp: ${paymentState.data.title}`
        : paymentState?.type === "wallet"
          ? paymentState.data.name
          : "Khóa học chưa xác định";

  const fee =
    paymentState?.type === "tutor"
      ? paymentState.data.fee + "/h"
      : paymentState?.type === "class"
        ? paymentState.data.fee || paymentState.data.price
        : paymentState?.type === "wallet"
          ? (parseInt(customAmount) || 0).toLocaleString("vi-VN") + "đ"
          : "Thỏa thuận";

  // Amount to pass to vietqr
  const amountToNumber =
    typeof fee === "string" ? parseInt(fee.replace(/\D/g, "")) : 0;

  // Format info string for QR if needed
  const transferMessage =
    paymentState?.type === "tutor"
      ? `Ket noi gia su ${paymentState.data.name}`
      : paymentState?.type === "class"
        ? `Dang ky lop ${paymentState?.data?.title || ""}`
        : paymentState?.type === "wallet"
          ? "Nap quy hoc tap"
          : "Thanh toan EduConnect";
  const encodedMessage = encodeURIComponent(transferMessage);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="bg-[#FDFBF7] rounded-[40px] p-8 md:p-12 border border-primary-100 paper-shadow">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-700">
            <CreditCard className="w-8 h-8" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-heading text-ink mb-4">
            Xác nhận thanh toán
          </h1>
          <p className="text-ink/60 font-light max-w-md mx-auto">
            Vui lòng hoàn thành thanh toán để bắt đầu lộ trình học tập của bạn
            cùng EduConnect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Thông tin thanh toán */}
          <div className="space-y-6">
            <div className="bg-primary-50/50 rounded-2xl p-6 border border-primary-100 h-full">
              <h3 className="font-heading text-xl text-ink mb-4">
                Thông tin đăng ký
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-ink/50 text-[11px] uppercase tracking-widest font-bold block mb-1">
                    Nội dung
                  </span>
                  <span className="font-medium text-ink block">{title}</span>
                </div>

                {paymentState?.type === "wallet" ? (
                  <div className="flex justify-between items-center pt-4 border-t border-primary-100/50">
                    <span className="text-ink/70">Số tiền nạp (VNĐ)</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-32 text-right bg-transparent border-b border-primary-300 focus:outline-none focus:border-primary-700 font-medium text-ink text-lg"
                    />
                  </div>
                ) : (
                  <div className="flex justify-between items-center pt-4 border-t border-primary-100/50">
                    <span className="text-ink/70">Học phí / Thù lao</span>
                    <span className="font-medium text-ink">{fee}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-ink/70">Phí hệ thống</span>
                  <span className="font-medium text-ink">Miễn phí</span>
                </div>
                <div className="border-t border-primary-100 my-4"></div>
                <div className="flex justify-between items-center font-heading text-xl">
                  <span className="text-ink">Tổng cộng</span>
                  <span className="text-primary-700">{fee}</span>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="space-y-6">
            <div className="bg-[#FDFBF7] rounded-2xl p-6 border border-primary-100 text-center flex flex-col items-center justify-center h-full">
              <div className="flex items-center gap-2 text-ink/70 mb-4 font-medium uppercase tracking-widest text-[11px]">
                <QrCode className="w-4 h-4" /> Quét mã VietQR
              </div>

              <div className="bg-[#FDFBF7] p-2 rounded-xl border border-primary-100 shadow-sm mb-4 inline-block">
                <img
                  src={`https://img.vietqr.io/image/MB-0886861805-compact2.png?amount=${amountToNumber || ""}&addInfo=${encodedMessage}&accountName=TRONG DUC`}
                  alt="VietQR MB Bank"
                  className="w-64 h-64 object-contain"
                />
              </div>

              <div className="text-[13px] text-ink/80 text-left w-full space-y-2 bg-primary-50/30 p-4 rounded-xl">
                <p className="flex justify-between">
                  <span className="text-ink/50">Ngân hàng:</span>{" "}
                  <strong>MB Bank</strong>
                </p>
                <p className="flex justify-between">
                  <span className="text-ink/50">Số TK:</span>{" "}
                  <strong>0886861805</strong>
                </p>
                <p className="flex justify-between">
                  <span className="text-ink/50">Chủ TK:</span>{" "}
                  <strong>TRONG DUC</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto mt-10">
          <motion.div whileHover={{ y: -2 }} className="group cursor-pointer">
            <Button
              onClick={() => navigate("/dashboard")}
              className="w-full h-14 rounded-2xl text-[13px] tracking-widest font-bold uppercase shadow-lg shadow-primary-700/20"
            >
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Tôi đã chuyển khoản thành công
            </Button>
          </motion.div>

          <p className="text-center text-[11px] text-ink/40 uppercase tracking-widest font-medium mt-6">
            Giao dịch được mã hóa và theo dõi an toàn bởi EduConnect
          </p>
        </div>
      </div>
    </div>
  );
}
