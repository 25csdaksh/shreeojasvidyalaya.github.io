import API from "../services/api";

export default function Payment() {

  const loadRazorpay = async () => {
    const { data } = await API.post("/payment/create-order");

    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: data.amount,
      currency: "INR",
      name: "SHREE OJAS VIDYALAYA",
      description: "Study Material Access",
      order_id: data.id,
      handler: async function () {
        const user = JSON.parse(localStorage.getItem("user"));
        await API.post("/payment/success", { userId: user._id });
        alert("Payment Successful");
        window.location.reload();
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex justify-center mt-20">
      <button
        onClick={loadRazorpay}
        className="bg-maroon text-white px-6 py-3 rounded"
      >
        Pay ₹500 & Get Access
      </button>
    </div>
  );
}
