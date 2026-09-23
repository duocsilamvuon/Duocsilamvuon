document.addEventListener("DOMContentLoaded", () => {
  // 1. Smooth Page Transition
  // Khởi tạo ban đầu để tránh chớp giật
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.15s ease-in-out";

  // Sau khi DOM load xong, fade in từ từ
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 50);

  // Lắng nghe tất cả các link để làm hiệu ứng fade out trước khi chuyển trang
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetUrl = link.href;

      // Chỉ áp dụng cho link nội bộ, không mở tab mới, và không phải link mailto
      if (
        link.hostname === window.location.hostname &&
        link.target !== "_blank" &&
        !targetUrl.includes("mailto:") &&
        !targetUrl.includes("#")
      ) {
        e.preventDefault(); // Dừng việc nhảy trang ngay lập tức
        document.body.style.opacity = "0"; // Mờ dần

        // Chuyển trang sau khi mờ xong (500ms)
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 150);
      }
    });
  });

  // 2. Nâng cấp hiệu ứng hover cho nút bấm (Micro-interactions)
  document.querySelectorAll("button, .glass-card").forEach((el) => {
    // Chỉ thêm hover event nếu muốn hiệu ứng mạnh hơn CSS thông thường
    el.addEventListener("mouseenter", () => {
      // Ví dụ: làm card nổi lên một chút
      if (
        el.classList.contains("glass-card") &&
        !el.closest("#products-grid")
      ) {
        el.style.transform = "translateY(-4px)";
      }
    });
    el.addEventListener("mouseleave", () => {
      if (
        el.classList.contains("glass-card") &&
        !el.closest("#products-grid")
      ) {
        el.style.transform = "translateY(0)";
      }
    });
  });

  // 3. Scroll Reveal Effect (Làm mượt hơn)
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
        entry.target.classList.remove("opacity-0", "translate-y-12");
        observer.unobserve(entry.target); // Ngừng theo dõi sau khi đã hiện
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".glass-card, section h2, section p")
    .forEach((el) => {
      // Tránh thêm vào các phần tử của product grid vì nó render động
      if (!el.closest("#products-grid")) {
        el.classList.add(
          "transition-all",
          "duration-1000",
          "opacity-0",
          "translate-y-12",
        );
        observer.observe(el);
      }
    });
});
