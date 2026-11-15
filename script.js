/**
 * RED DEVILS STORE - OFFICIAL JAVASCRIPT ENGINE
 * Full Single-Page Application (SPA) architecture for Manchester United E-commerce
 */

// ==================== 1. PRODUCT DATABASE ====================
const PRODUCTS = [
  {
    id: 'mu-home-24',
    name: 'Áo Đấu Sân Nhà 2024/25 - Manchester United Home Kit',
    category: 'home',
    categoryName: 'Sân Nhà',
    playerPrice: 1250000,
    fanPrice: 850000,
    oldPrice: 1450000,
    rating: 4.8,
    reviewsCount: 486,
    badge: 'BÁN CHẠY NHẤT',
    image: 'images/home-kit-2024-25-front.png',
    imageBack: 'images/home-kit-2024-25-back.png?v=20261114-0205',
    description: 'Chiếc áo đấu sân nhà Manchester United 2024/2025 mang sắc đỏ rực lửa với hiệu ứng chuyển sắc gradient độc đáo. Nhà tài trợ Snapdragon nổi bật trước ngực cùng 3 sọc trắng Adidas kiêu hãnh trên vai.',
    features: [
      'Công nghệ dệt Heat.Rdy làm mát cơ thể tối ưu',
      'Huy hiệu Manchester United và logo Adidas in nhiệt nổi 3D siêu nhẹ',
      'Chất liệu 100% Polyester tái chế thân thiện môi trường',
      'Được Bruno Fernandes, Rashford và Mainoo mặc thi đấu chính thức'
    ],
    kitType: 'home',
    colorHex: '#DA291C'
  },
  {
    id: 'mu-away-24',
    name: 'Áo Đấu Sân Khách 2024/25 - Manchester United Away Kit',
    category: 'away',
    categoryName: 'Sân Khách',
    playerPrice: 1250000,
    fanPrice: 850000,
    oldPrice: 1400000,
    rating: 4.7,
    reviewsCount: 372,
    badge: 'MỚI RA MẮT',
    image: 'images/away-kit-2024-25-front.png',
    imageBack: 'images/away-kit-2024-25-back.png?v=20261114-0205',
    description: 'Phiên bản sân khách màu xanh Royal Navy quyền lực lấy cảm hứng từ dòng sông Irwell và sắc xanh lịch sử từng đồng hành cùng Quỷ Đỏ trong chức vô địch Châu Âu 1968.',
    features: [
      'Họa tiết dệt chìm hình chữ M lặp lại hiện đại',
      'Cổ áo polo cách điệu sang trọng và thanh lịch',
      'Chất liệu siêu nhẹ chống bám dính mồ hôi',
      'Phom áo chuẩn vận động viên'
    ],
    kitType: 'away',
    colorHex: '#1C3373'
  },
  {
    id: 'mu-third-24',
    name: 'Áo Đấu Bộ Thứ Ba 2024/25 - Manchester United Third Kit',
    category: 'third',
    categoryName: 'Bộ Thứ Ba',
    playerPrice: 1250000,
    fanPrice: 850000,
    oldPrice: 1390000,
    rating: 4.6,
    reviewsCount: 284,
    badge: 'RETRO TREFOIL',
    image: 'images/third-kit-2024-25-front.png',
    imageBack: 'images/third-kit-2024-25-back.png?v=20261114-0205',
    description: 'Sự trở lại của logo 3 lá Adidas Trefoil huyền thoại trên nền màu trắng kem ngọc trai. Dải 3 màu đỏ - trắng - đen băng qua ngực tạo nên tuyệt tác thời trang bóng đá đường phố.',
    features: [
      'Logo Adidas Trefoil cổ điển chỉ xuất hiện trên áo đấu cấp cao',
      'Huy hiệu Quỷ Đỏ tối giản thanh thoát',
      'Vải dệt kim jacquard cao cấp mềm mịn',
      'Phong cách thời trang Blokecore cực chất'
    ],
    kitType: 'third',
    colorHex: '#F0EAD6'
  },
  {
    id: 'mu-retro-1999',
    name: 'Áo Đấu Retro Huyền Thoại Cú Ăn 3 - Camp Nou 1999',
    category: 'retro',
    categoryName: 'Retro Cổ Điển',
    playerPrice: 950000,
    fanPrice: 950000,
    oldPrice: 1200000,
    rating: 4.8,
    reviewsCount: 438,
    badge: 'TREBLE 1999',
    image: 'images/retro-treble-1999-front.png',
    imageBack: 'images/retro-treble-1999-back.png?v=20261114-0205',
    description: 'Mẫu áo bất tử gắn liền với đêm thần kỳ Camp Nou 1999 của Sir Alex Ferguson. Cổ bẻ có khóa zip độc đáo, logo nhà tài trợ SHARP huyền thoại in to bản cùng logo Umbro kim cương dệt nổi.',
    features: [
      'Tái hiện nguyên bản 100% mẫu áo chung kết C1 1999',
      'Cổ áo có khóa kéo đặc trưng của thập niên 90',
      'Chất liệu vải bóng Poly-Vintage thoáng mát',
      'Tặng kèm huy hiệu thêu The Treble 1999'
    ],
    kitType: 'retro99',
    colorHex: '#B80C0C'
  },
  {
    id: 'mu-retro-2008',
    name: 'Áo Đấu Retro Chung Kết Moscow 2008 - CR7 Champions',
    category: 'retro',
    categoryName: 'Retro Cổ Điển',
    playerPrice: 990000,
    fanPrice: 990000,
    oldPrice: 1250000,
    rating: 4.7,
    reviewsCount: 396,
    badge: 'MOSCOW 2008',
    image: 'images/retro-moscow-2008-front.png',
    imageBack: 'images/retro-moscow-2008-back.png?v=20261114-0205',
    description: 'Áo đấu chứng kiến Cristiano Ronaldo bật cao đánh đầu xé lưới Chelsea tại Moscow trong trận chung kết Champions League 2008 nghẹt thở. Dải sọc trắng sau lưng tôn vinh dáng vẻ dũng mãnh.',
    features: [
      'Nhà tài trợ AIG in lụa chuẩn xác màu trắng',
      'Dải sọc trắng đặc trưng chạy dọc sống lưng',
      'Logo thêu kỷ niệm Final Moscow 2008 trước ngực',
      'Vải dệt Nike Fit thoáng khí'
    ],
    kitType: 'home',
    colorHex: '#DA291C'
  },
  {
    id: 'mu-gk-24',
    name: 'Áo Thủ Môn Andre Onana 2024/25 - Green Flame',
    category: 'gk',
    categoryName: 'Áo Thủ Môn',
    playerPrice: 1150000,
    fanPrice: 790000,
    oldPrice: 1300000,
    rating: 4.8,
    reviewsCount: 310,
    badge: 'ONANA 24',
    image: 'images/onana-goalkeeper-2024-25-front.png?v=20261114-onana-kit',
    imageBack: 'images/onana-goalkeeper-2024-25-back.png?v=20261114-onana-kit',
    description: 'Áo thủ môn chính thức của Andre Onana với tông màu xanh dạ quang nổi bật giúp tăng phản xạ và uy lực trong khung gỗ Old Trafford.',
    features: [
      'Đệm hỗ trợ cùi chỏ linh hoạt khi bay người cản phá',
      'Vùng ngực dập vân tăng ma sát bắt dính bóng',
      'Màu sắc neon nổi bật làm phân tán thị giác tiền đạo đối phương'
    ],
    kitType: 'away',
    colorHex: '#00E676'
  },
  {
    id: 'mu-anthem-jacket',
    name: 'Áo Khoác Di Chuyển Anthem Jacket Manchester United 24/25',
    category: 'home',
    categoryName: 'Thời Trang',
    playerPrice: 1350000,
    fanPrice: 1350000,
    oldPrice: 1600000,
    rating: 4.6,
    reviewsCount: 247,
    badge: 'ANTHEM JACKET',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a42b94f6f700445d9a9b70b42df52285_9366/Manchester_United_24-25_Anthem_Jacket_Red_KV6731_HM1.jpg',
    imageBack: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a42b94f6f700445d9a9b70b42df52285_9366/Manchester_United_24-25_Anthem_Jacket_Red_KV6731_HM3_hover.jpg',
    description: 'Mẫu áo khoác các cầu thủ mặc khi xếp hàng chào sân trước mỗi trận cầu đỉnh cao. Thiết kế 2 mặt có thể mặc đảo ngược (Reversible) cực kỳ thời thượng.',
    features: [
      'Thiết kế mặc được 2 mặt: Mặt đỏ rực lửa & Mặt đen huyền bí',
      'Chất liệu gió dù trượt nước, cản gió giữ ấm',
      'Túi khóa kéo 2 bên hông tiện dụng để điện thoại, ví tiền'
    ],
    kitType: 'home',
    colorHex: '#DA291C'
  },
  {
    id: 'mu-prematch',
    name: 'Áo Khởi Động Trước Trận Đấu Pre-Match Top 2024/25',
    category: 'away',
    categoryName: 'Áo Tập Luyện',
    playerPrice: 890000,
    fanPrice: 890000,
    oldPrice: 1050000,
    rating: 4.5,
    reviewsCount: 328,
    badge: 'PRE-MATCH',
    image: 'https://images.footballfanatics.com/manchester-united/manchester-united-adidas-pre-match-warm-up-shirt_ss5_p-200954461+pv-1+u-cfsd6j7f6efyv8efrw0d+v-3a9d9b23f81e4cb89d9016b8d7890760.jpg?_hv=2&w=600',
    imageBack: 'https://images.footballfanatics.com/manchester-united/manchester-united-adidas-pre-match-warm-up-shirt_ss5_p-200954461+pv-2+u-cfsd6j7f6efyv8efrw0d+v-b2a88d6beae04f719460a8b417c8230b.jpg?_hv=2&w=600',
    description: 'Áo khởi động trên thảm cỏ Old Trafford trước giờ bóng lăn. Họa tiết đồ họa trừu tượng lấy cảm hứng từ biểu tượng Quỷ Đỏ cách điệu.',
    features: [
      'Chất liệu thấm hút mồ hôi Aeroready chuyên sâu',
      'Trọng lượng siêu nhẹ cho cảm giác tự do tối đa',
      'Họa tiết graphic in chìm toàn thân độc đáo'
    ],
    kitType: 'away',
    colorHex: '#151E3F'
  }
];

// Star Players presets for 3D Customizer
const STAR_PLAYERS = {
  BRUNO: { name: 'BRUNO', number: 8, label: 'Bruno Fernandes (C)' },
  RASHFORD: { name: 'RASHFORD', number: 10, label: 'Marcus Rashford' },
  MAINOO: { name: 'MAINOO', number: 37, label: 'Kobbie Mainoo' },
  GARNACHO: { name: 'GARNACHO', number: 17, label: 'Alejandro Garnacho' },
  HØJLUND: { name: 'HØJLUND', number: 9, label: 'Rasmus Højlund' }
};

// ==================== 2. APPLICATION STATE ====================
const state = {
  currentView: 'home',
  activeProductDetailId: 'mu-home-24',
  cart: [],
  voucherCode: null,
  discountRate: 0,
  flatDiscount: 0,
  shippingFee: 30000,
  freeShippingThreshold: 799000,
  


  // History view state
  currentMgrFilter: 'all',
  quizCurrentIndex: 0,
  quizScore: 0,
  quizAnswered: false,

  // Sound system state
  isAudioMuted: false
};

// Currency Formatter
function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
}

// ==================== 3. MULTI-VIEW SPA ROUTER ====================
function navigateTo(viewName, params = {}) {
  // Update state
  state.currentView = viewName;

  // Hide all views, show target view
  const views = document.querySelectorAll('.app-view');
  views.forEach(view => view.classList.remove('active'));

  let targetViewEl = null;
  let crumbName = 'Trang Chủ';

  switch (viewName) {
    case 'home':
      targetViewEl = document.getElementById('viewHome');
      crumbName = 'Trang Chủ';
      break;
    case 'shop':
      targetViewEl = document.getElementById('viewShop');
      crumbName = 'Bộ Sưu Tập Áo Đấu';
      if (params.filter) {
        applyCatalogFilter(params.filter);
      }
      break;
    case 'product-detail':
      targetViewEl = document.getElementById('viewProductDetail');
      if (params.id) {
        state.activeProductDetailId = params.id;
      }
      renderProductDetail(state.activeProductDetailId);
      const prod = PRODUCTS.find(p => p.id === state.activeProductDetailId);
      crumbName = prod ? prod.name : 'Chi Tiết Sản Phẩm';
      break;
    case 'customizer':
      navigateTo('shop');
      return;
    case 'cart':
      targetViewEl = document.getElementById('viewCart');
      crumbName = 'Giỏ Hàng';
      renderFullCartPage();
      break;
    case 'checkout':
      targetViewEl = document.getElementById('viewCheckout');
      crumbName = 'Thanh Toán Đơn Hàng';
      renderCheckoutView();
      break;
    case 'tracking':
      targetViewEl = document.getElementById('viewTracking');
      crumbName = 'Tra Cứu Đơn Hàng';
      if (params.code) {
        document.getElementById('trackingCodeInput').value = params.code;
        lookupOrder(params.code);
      }
      break;
    case 'history':
      targetViewEl = document.getElementById('viewHistory');
      crumbName = 'Lịch Sử & HLV';
      renderManagers();
      initQuiz();
      break;
    default:
      targetViewEl = document.getElementById('viewHome');
      crumbName = 'Trang Chủ';
  }

  if (targetViewEl) {
    targetViewEl.classList.add('active');
  }

  // Update Breadcrumbs
  const crumbEl = document.getElementById('currentCrumb');
  if (crumbEl) crumbEl.textContent = crumbName;

  // Update Navigation Active State
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('data-navigate') === viewName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Close mobile menu if open
  const navMenu = document.getElementById('navMenu');
  if (navMenu) navMenu.classList.remove('open');

  // Scroll smoothly to top of content
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Bind all navigation triggers with data-navigate
function setupNavigationListeners() {
  const searchOverlay = document.getElementById('searchOverlay');

  document.addEventListener('click', (e) => {
    const navBtn = e.target.closest('[data-navigate]');
    if (navBtn) {
      e.preventDefault();
      if (searchOverlay) searchOverlay.classList.remove('open');
      const target = navBtn.getAttribute('data-navigate');
      const filter = navBtn.getAttribute('data-filter');
      const prodId = navBtn.getAttribute('data-prod-id');
      navigateTo(target, { filter, id: prodId });
    }
  });

  // Mobile menu hamburger
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Quick Search open/close
  const searchTrigger = document.getElementById('searchTrigger');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');

  if (searchTrigger && searchOverlay) {
    searchTrigger.addEventListener('click', () => {
      searchOverlay.classList.toggle('open');
      if (searchOverlay.classList.contains('open')) {
        searchInput.focus();
      }
    });
  }

  if (searchClose && searchOverlay) {
    searchClose.addEventListener('click', () => {
      searchOverlay.classList.remove('open');
    });
  }

  // Search input and tag clicks
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (q.length > 2) {
        navigateTo('shop');
        filterProductsByQuery(q);
      }
    });
  }

  document.querySelectorAll('.tag-btn[data-search]').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-search');
      if (searchOverlay) searchOverlay.classList.remove('open');
      navigateTo('shop');
      if (q) filterProductsByQuery(q.toLowerCase());
    });
  });
}

// ==================== 4. SVG JERSEY GENERATOR (FRONT & BACK 3D) ====================
function generateJerseySvgContent(kitType, isBack = false, name = 'BRUNO', number = '8', badge = 'pl') {
  // Color presets
  let primaryGradient, cuffColor, trimColor, stripesColor, collarStyle;
  
  if (kitType === 'home') {
    primaryGradient = `
      <linearGradient id="grad_${kitType}_${isBack ? 'b' : 'f'}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#E61C1C"/>
        <stop offset="45%" stop-color="#BA0C0C"/>
        <stop offset="100%" stop-color="#730505"/>
      </linearGradient>
    `;
    cuffColor = '#111111';
    trimColor = '#FFFFFF';
    stripesColor = '#FFFFFF';
  } else if (kitType === 'away') {
    primaryGradient = `
      <linearGradient id="grad_${kitType}_${isBack ? 'b' : 'f'}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#244299"/>
        <stop offset="60%" stop-color="#142661"/>
        <stop offset="100%" stop-color="#0A1333"/>
      </linearGradient>
    `;
    cuffColor = '#0A1333';
    trimColor = '#C8A45D';
    stripesColor = '#B0C4DE';
  } else if (kitType === 'third') {
    primaryGradient = `
      <linearGradient id="grad_${kitType}_${isBack ? 'b' : 'f'}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FAF7EE"/>
        <stop offset="60%" stop-color="#E8E2D0"/>
        <stop offset="100%" stop-color="#D9D0B8"/>
      </linearGradient>
    `;
    cuffColor = '#DA291C';
    trimColor = '#111111';
    stripesColor = '#111111';
  } else {
    // retro99
    primaryGradient = `
      <linearGradient id="grad_${kitType}_${isBack ? 'b' : 'f'}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#C41212"/>
        <stop offset="100%" stop-color="#7A0000"/>
      </linearGradient>
    `;
    cuffColor = '#FFFFFF';
    trimColor = '#FFFFFF';
    stripesColor = '#FFFFFF';
  }

  // Sleeve Badges SVG snippet
  let badgeSvg = '';
  if (badge === 'pl') {
    badgeSvg = `
      <g transform="translate(62, 175) scale(0.6)">
        <circle cx="20" cy="20" r="18" fill="#FFFFFF" stroke="#38003C" stroke-width="2"/>
        <text x="20" y="24" font-family="'Montserrat', sans-serif" font-weight="900" font-size="9" fill="#38003C" text-anchor="middle">🦁 PL</text>
      </g>
    `;
  } else if (badge === 'ucl') {
    badgeSvg = `
      <g transform="translate(62, 175) scale(0.6)">
        <circle cx="20" cy="20" r="18" fill="#0E1E5B" stroke="#FFFFFF" stroke-width="2"/>
        <text x="20" y="24" font-family="'Montserrat', sans-serif" font-weight="900" font-size="10" fill="#FFFFFF" text-anchor="middle">★ UCL</text>
      </g>
    `;
  }

  if (!isBack) {
    // ================= FRONT FACE =================
    return `
      <defs>
        ${primaryGradient}
        <filter id="jerseyShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="12" stdDeviation="15" flood-color="#000" flood-opacity="0.4"/>
        </filter>
        <pattern id="meshPattern" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="1" fill="#000" opacity="0.08"/>
        </pattern>
      </defs>

      <g filter="url(#jerseyShadow)">
        <!-- Left Sleeve -->
        <path d="M 155,70 L 45,150 L 95,215 L 155,160 Z" fill="url(#grad_${kitType}_f)"/>
        <path d="M 45,150 L 58,141 L 108,206 L 95,215 Z" fill="${cuffColor}"/>
        
        <!-- Right Sleeve -->
        <path d="M 345,70 L 455,150 L 405,215 L 345,160 Z" fill="url(#grad_${kitType}_f)"/>
        <path d="M 455,150 L 442,141 L 392,206 L 405,215 Z" fill="${cuffColor}"/>

        <!-- Main Torso Body -->
        <path d="M 155,70 Q 250,90 345,70 L 365,490 Q 250,510 135,490 Z" fill="url(#grad_${kitType}_f)"/>
        <!-- Texture overlay -->
        <path d="M 155,70 Q 250,90 345,70 L 365,490 Q 250,510 135,490 Z" fill="url(#meshPattern)"/>

        <!-- 3-Stripes Shoulders -->
        <line x1="160" y1="72" x2="75" y2="140" stroke="${stripesColor}" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="170" y1="80" x2="85" y2="148" stroke="${stripesColor}" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="180" y1="88" x2="95" y2="156" stroke="${stripesColor}" stroke-width="4.5" stroke-linecap="round"/>

        <line x1="340" y1="72" x2="425" y2="140" stroke="${stripesColor}" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="330" y1="80" x2="415" y2="148" stroke="${stripesColor}" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="320" y1="88" x2="405" y2="156" stroke="${stripesColor}" stroke-width="4.5" stroke-linecap="round"/>

        <!-- Sleeve Badge -->
        ${badgeSvg}

        <!-- Collar -->
        ${kitType === 'retro99' ? `
          <!-- Retro Zipper Big Collar -->
          <path d="M 195,70 L 250,135 L 305,70 L 320,38 L 180,38 Z" fill="#FFFFFF" stroke="#111" stroke-width="2"/>
          <line x1="250" y1="90" x2="250" y2="135" stroke="#B80C0C" stroke-width="3"/>
        ` : `
          <!-- Modern Ribbed Collar -->
          <path d="M 195,72 Q 250,125 305,72 L 295,68 Q 250,105 205,68 Z" fill="${trimColor}"/>
          <path d="M 205,68 Q 250,100 295,68" stroke="#111111" stroke-width="2.5" fill="none"/>
        `}

        <!-- Adidas Logo (Right Chest) -->
        <g transform="translate(190, 160) scale(0.9)">
          <rect x="0" y="24" width="6" height="18" transform="skewX(-28)" fill="${kitType === 'third' ? '#111' : '#fff'}"/>
          <rect x="12" y="15" width="6" height="27" transform="skewX(-28)" fill="${kitType === 'third' ? '#111' : '#fff'}"/>
          <rect x="24" y="6" width="6" height="36" transform="skewX(-28)" fill="${kitType === 'third' ? '#111' : '#fff'}"/>
        </g>

        <!-- MU Crest (Left Chest) -->
        <g transform="translate(275, 150) scale(0.85)">
          <ellipse cx="30" cy="30" rx="28" ry="30" fill="#FFE500" stroke="#000000" stroke-width="2.5"/>
          <path d="M 6,24 Q 30,14 54,24 L 54,36 Q 30,46 6,36 Z" fill="#DA291C"/>
          <text x="30" y="22" font-family="'Montserrat', sans-serif" font-weight="900" font-size="6" fill="#FFE500" text-anchor="middle">MANCHESTER</text>
          <text x="30" y="44" font-family="'Montserrat', sans-serif" font-weight="900" font-size="6" fill="#FFE500" text-anchor="middle">UNITED</text>
          <circle cx="30" cy="32" r="7" fill="#DA291C"/>
          <path d="M 28,30 L 32,30 L 30,36 Z" fill="#FFE500"/>
        </g>

        <!-- Main Sponsor -->
        ${kitType === 'retro99' ? `
          <!-- SHARP Sponsor -->
          <text x="250" y="280" font-family="'Montserrat', sans-serif" font-weight="900" font-size="44" fill="#FFFFFF" letter-spacing="6" text-anchor="middle">SHARP</text>
          <text x="250" y="308" font-family="'Outfit', sans-serif" font-weight="700" font-size="12" fill="#FFE500" letter-spacing="3" text-anchor="middle">THE TREBLE 1999</text>
        ` : `
          <!-- Snapdragon Sponsor -->
          <g transform="translate(175, 240)">
            <path d="M 75,10 C 68,2 55,0 48,7 C 42,14 48,22 58,22 C 64,22 72,18 75,10 Z" fill="${kitType === 'third' ? '#DA291C' : '#FFFFFF'}" opacity="0.95"/>
            <circle cx="58" cy="10" r="3.5" fill="#DA291C"/>
            <text x="75" y="46" font-family="'Montserrat', sans-serif" font-weight="800" font-size="22" fill="${kitType === 'third' ? '#111111' : '#FFFFFF'}" letter-spacing="4" text-anchor="middle">Snapdragon</text>
          </g>
        `}

        <!-- Authentic Heat.Rdy / Aeroready Badge at hem -->
        <g transform="translate(155, 460)">
          <rect x="0" y="0" width="45" height="15" rx="3" fill="#111111" opacity="0.7"/>
          <text x="22" y="11" font-family="'Montserrat', sans-serif" font-size="7" font-weight="bold" fill="#C8A45D" text-anchor="middle">HEAT.RDY</text>
        </g>
      </g>
    `;
  } else {
    // ================= BACK FACE (NAME & NUMBER) =================
    const nameColor = kitType === 'third' ? '#111111' : '#FFFFFF';
    const numColor = kitType === 'third' ? '#111111' : '#FFFFFF';

    return `
      <defs>
        ${primaryGradient}
        <filter id="jerseyShadowB" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="12" stdDeviation="15" flood-color="#000" flood-opacity="0.4"/>
        </filter>
        <filter id="numShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#000" flood-opacity="0.5"/>
        </filter>
        <!-- Arched Text Path for Player Name -->
        <path id="nameArchPath" d="M 160,195 Q 250,175 340,195" fill="none"/>
      </defs>

      <g filter="url(#jerseyShadowB)">
        <!-- Sleeves -->
        <path d="M 155,70 L 45,150 L 95,215 L 155,160 Z" fill="url(#grad_${kitType}_b)"/>
        <path d="M 45,150 L 58,141 L 108,206 L 95,215 Z" fill="${cuffColor}"/>
        
        <path d="M 345,70 L 455,150 L 405,215 L 345,160 Z" fill="url(#grad_${kitType}_b)"/>
        <path d="M 455,150 L 442,141 L 392,206 L 405,215 Z" fill="${cuffColor}"/>

        <!-- Main Torso Body -->
        <path d="M 155,70 Q 250,90 345,70 L 365,490 Q 250,510 135,490 Z" fill="url(#grad_${kitType}_b)"/>

        <!-- 3-Stripes Shoulders -->
        <line x1="160" y1="72" x2="75" y2="140" stroke="${stripesColor}" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="170" y1="80" x2="85" y2="148" stroke="${stripesColor}" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="180" y1="88" x2="95" y2="156" stroke="${stripesColor}" stroke-width="4.5" stroke-linecap="round"/>

        <line x1="340" y1="72" x2="425" y2="140" stroke="${stripesColor}" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="330" y1="80" x2="415" y2="148" stroke="${stripesColor}" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="320" y1="88" x2="405" y2="156" stroke="${stripesColor}" stroke-width="4.5" stroke-linecap="round"/>

        <!-- Back Collar Trim with Red Devil Icon -->
        <path d="M 195,72 Q 250,88 305,72 L 295,68 Q 250,78 205,68 Z" fill="${trimColor}"/>
        <circle cx="250" cy="100" r="12" fill="#DA291C"/>
        <text x="250" y="104" font-family="'Montserrat', sans-serif" font-weight="900" font-size="9" fill="#FFE500" text-anchor="middle">MU</text>

        <!-- Player Name (Official Premier League Arch Typography) -->
        <g filter="url(#numShadow)">
          <text font-family="'Montserrat', sans-serif" font-weight="900" font-size="28" fill="${nameColor}" letter-spacing="4" text-anchor="middle">
            <textPath href="#nameArchPath" startOffset="50%">
              ${name.toUpperCase()}
            </textPath>
          </text>
        </g>

        <!-- Player Number (Bold Premier League Official Style) -->
        <g filter="url(#numShadow)">
          <text x="250" y="340" font-family="'Bebas Neue', sans-serif" font-size="145" fill="${numColor}" text-anchor="middle" letter-spacing="2">
            ${number}
          </text>
          <!-- Premier League lion watermark inside number -->
          <circle cx="250" cy="335" r="9" fill="#DA291C" opacity="0.9"/>
          <text x="250" y="338" font-size="6" font-weight="bold" fill="#fff" text-anchor="middle">PL</text>
        </g>

        <!-- Bottom Hem Trim -->
        <path d="M 140,485 Q 250,505 360,485" stroke="#111" stroke-width="3" fill="none"/>
      </g>
    `;
  }
}

// ==================== 5. PRODUCT CATALOG & SHOP SYSTEM ====================
function showJerseyImageFallback(img) {
  img.onerror = null;
  img.src = `data:image/svg+xml;charset=utf-8,${img.dataset.fallbackSvg}`;
}

function createJerseyFallbackSvg(kitType, isBack = false) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 580">${generateJerseySvgContent(kitType, isBack)}</svg>`;
}

function renderRatingStars(rating) {
  const ratingPercent = `${(Math.max(0, Math.min(5, rating)) / 5) * 100}%`;
  const formattedRating = rating.toFixed(1);

  return `
    <span class="rating-stars" role="img" aria-label="${formattedRating} trên 5 sao">
      <span class="rating-stars-empty">★★★★★</span>
      <span class="rating-stars-filled" style="width: ${ratingPercent}">★★★★★</span>
    </span>
    <span class="rating-value">${formattedRating}</span>
  `;
}

function createProductCardHtml(prod) {
  const fallbackSvg = createJerseyFallbackSvg(prod.kitType);
  const fallbackSvgData = encodeURIComponent(fallbackSvg).replace(/'/g, '%27');

  return `
    <div class="product-card" data-prod-id="${prod.id}">
      <span class="p-card-badge">${prod.badge}</span>
      <div class="p-card-thumb" data-navigate="product-detail" data-prod-id="${prod.id}">
        <img 
          src="${prod.image}" 
          alt="${prod.name} - mặt trước"
          class="product-real-img" 
          loading="lazy"
          data-fallback-svg="${fallbackSvgData}"
          onerror="showJerseyImageFallback(this)"
        />
        <div class="p-card-quick-actions">
          <button class="btn btn-sm btn-primary btn-block" data-navigate="product-detail" data-prod-id="${prod.id}">
            <i class="fa-solid fa-eye"></i> Xem Chi Tiết
          </button>
        </div>
      </div>
      <div class="p-card-body">
        <span class="p-card-category">${prod.categoryName}</span>
        <h4 class="p-card-title" data-navigate="product-detail" data-prod-id="${prod.id}">${prod.name}</h4>
        <div class="p-card-rating">
          ${renderRatingStars(prod.rating)}
          <span class="rating-count">(${prod.reviewsCount})</span>
        </div>
        <div class="p-card-prices">
          <span class="p-current-price">${formatVND(prod.playerPrice)}</span>
          <span class="p-old-price">${formatVND(prod.oldPrice)}</span>
        </div>
        <div class="p-card-footer-btns">
          <button class="btn btn-outline btn-sm btn-block" data-navigate="product-detail" data-prod-id="${prod.id}">
            <i class="fa-solid fa-shirt"></i> Chọn Size & Mua
          </button>
          <button class="btn btn-primary btn-sm btn-quick-add" data-id="${prod.id}" title="Thêm nhanh vào giỏ">
            <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderCatalog() {
  // Render featured on Home
  const homeGrid = document.getElementById('homeFeaturedGrid');
  if (homeGrid) {
    homeGrid.innerHTML = PRODUCTS.slice(0, 4).map(createProductCardHtml).join('');
  }

  // Render all on Shop Page
  renderShopProducts(PRODUCTS);
}

function renderShopProducts(productsList) {
  const shopGrid = document.getElementById('shopProductsGrid');
  const countEl = document.getElementById('shopResultsCount');

  if (shopGrid) {
    if (productsList.length === 0) {
      shopGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #888;">
          <i class="fa-solid fa-shirt" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.5;"></i>
          <h3>Không tìm thấy mẫu áo đấu phù hợp</h3>
          <p>Thử tìm kiếm với từ khóa khác hoặc điều chỉnh bộ lọc giá.</p>
        </div>
      `;
    } else {
      shopGrid.innerHTML = productsList.map(createProductCardHtml).join('');
    }
  }

  if (countEl) {
    countEl.textContent = `Hiển thị ${productsList.length} mẫu áo đấu`;
  }
}

function applyCatalogFilter(filterCat) {
  // Update sidebar active link
  document.querySelectorAll('.filter-link').forEach(link => {
    if (link.getAttribute('data-filter') === filterCat) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  if (filterCat === 'all') {
    renderShopProducts(PRODUCTS);
  } else {
    const filtered = PRODUCTS.filter(p => p.category === filterCat);
    renderShopProducts(filtered);
  }
}

function filterProductsByQuery(query) {
  const filtered = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );
  renderShopProducts(filtered);
}

function setupShopFilters() {
  // Sidebar category filter links
  document.querySelectorAll('.filter-link').forEach(link => {
    link.addEventListener('click', () => {
      const cat = link.getAttribute('data-filter');
      applyCatalogFilter(cat);
    });
  });

  // Price range slider filter
  const priceSlider = document.getElementById('priceRangeInput');
  const priceDisplay = document.getElementById('priceRangeDisplay');

  if (priceSlider && priceDisplay) {
    priceSlider.addEventListener('input', (e) => {
      const maxVal = parseInt(e.target.value);
      priceDisplay.textContent = `Dưới ${formatVND(maxVal)}`;
      const filtered = PRODUCTS.filter(p => p.playerPrice <= maxVal);
      renderShopProducts(filtered);
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById('shopSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      const mode = e.target.value;
      let sorted = [...PRODUCTS];
      if (mode === 'price-asc') sorted.sort((a, b) => a.playerPrice - b.playerPrice);
      if (mode === 'price-desc') sorted.sort((a, b) => b.playerPrice - a.playerPrice);
      if (mode === 'rating') sorted.sort((a, b) => b.rating - a.rating);
      renderShopProducts(sorted);
    });
  }

  // Quick add to cart buttons inside product cards
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-quick-add');
    if (btn) {
      e.stopPropagation();
      const pId = btn.getAttribute('data-id');
      const prod = PRODUCTS.find(p => p.id === pId);
      if (prod) {
        const item = {
          cartId: 'quick-' + Date.now(),
          productId: prod.id,
          name: prod.name,
          image: prod.image,
          price: prod.playerPrice,
          size: 'M',
          version: 'Bản Cầu Thủ (Player Heat.Rdy)',
          customName: 'BRUNO',
          customNumber: 8,
          badge: 'PL',
          kitType: prod.kitType,
          quantity: 1
        };
        addToCart(item);
        showToast(`Đã thêm ${prod.name} vào giỏ hàng!`, 'success');
        playCashChime();
        openCartDrawer();
      }
    }
  });
}

// ==================== 6. PRODUCT DETAIL PAGE ====================
function renderProductDetail(productId) {
  const prod = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  const container = document.getElementById('productDetailContainer');
  if (!container) return;

  const fallbackSvg = createJerseyFallbackSvg(prod.kitType);
  const fallbackSvgData = encodeURIComponent(fallbackSvg).replace(/'/g, '%27');
  const fallbackSvgBack = createJerseyFallbackSvg(prod.kitType, true);
  const fallbackSvgBackData = encodeURIComponent(fallbackSvgBack).replace(/'/g, '%27');

  container.innerHTML = `
    <!-- Left: Stage & Gallery -->
    <div class="p-detail-gallery">
      <div class="p-detail-main-stage" id="detailMainStage">
        <img 
          src="${prod.image}" 
          alt="${prod.name} - mặt trước"
          id="detailMainImg" 
          class="detail-real-img"
          data-fallback-svg="${fallbackSvgData}"
          onerror="showJerseyImageFallback(this)"
        />
      </div>

      <div class="p-detail-thumbs">
        <button class="p-thumb-btn active" id="detailThumbFront" title="Mặt trước">
          <img src="${prod.image}" alt="${prod.name} - mặt trước" data-fallback-svg="${fallbackSvgData}" onerror="showJerseyImageFallback(this)" />
        </button>
        ${prod.imageBack ? `
        <button class="p-thumb-btn" id="detailThumbBack" title="Mặt sau">
          <img src="${prod.imageBack}" alt="${prod.name} - mặt sau" data-fallback-svg="${fallbackSvgBackData}" onerror="showJerseyImageFallback(this)" />
        </button>
        ` : ''}
      </div>
    </div>

    <!-- Right: Purchase & Options Information -->
    <div class="p-detail-info">
      <span class="p-detail-badge">${prod.badge}</span>
      <h1 class="p-detail-title">${prod.name}</h1>

      <div class="p-detail-rating-row">
        <span class="rating-summary">
          ${renderRatingStars(prod.rating)}
        </span>
        <span class="rating-count">(${prod.reviewsCount} Đánh giá từ Manucian)</span>
        <span class="stock-tag" style="color: #4cd964;"><i class="fa-solid fa-circle-check"></i> Còn hàng sẵn giao</span>
      </div>

      <div class="p-detail-price-box">
        <span class="p-detail-current-price" id="detailCalculatedPrice">${formatVND(prod.playerPrice)}</span>
        <span class="p-detail-old-price">${formatVND(prod.oldPrice)}</span>
        <span class="discount-tag" style="background: rgba(218,41,28,0.2); color: #ff3b30; padding: 2px 8px; border-radius: 4px; font-weight: 700; font-size: 0.8rem;">
          TIẾT KIỆM ${formatVND(prod.oldPrice - prod.playerPrice)}
        </span>
      </div>

      <p class="p-detail-desc">${prod.description}</p>

      <!-- Customization Box right on product detail -->
      <div class="p-detail-custom-box">
        <h5><i class="fa-solid fa-wand-magic-sparkles text-red"></i> TÙY CHỌN IN TÊN & SỐ ÁO MIỄN PHÍ:</h5>
        <div class="p-detail-row">
          <div class="input-group">
            <label>TÊN IN TRÊN ÁO:</label>
            <input type="text" id="detailInputName" value="BRUNO" maxlength="12" style="background:#111; color:#fff; border:1px solid #333; padding:8px 12px; border-radius:4px; font-weight:700; width:100%; text-transform:uppercase;">
          </div>
          <div class="input-group">
            <label>SỐ ÁO:</label>
            <input type="number" id="detailInputNumber" value="8" min="1" max="99" style="background:#111; color:#fff; border:1px solid #333; padding:8px 12px; border-radius:4px; font-weight:700; width:100%;">
          </div>
        </div>

        <div class="p-detail-quick-players">
          <span class="p-detail-quick-label">Gợi ý in nhanh:</span>
          <button type="button" class="player-chip-btn" data-name="BRUNO" data-num="8">Bruno (8)</button>
          <button type="button" class="player-chip-btn" data-name="MAINOO" data-num="37">Mainoo (37)</button>
          <button type="button" class="player-chip-btn" data-name="GARNACHO" data-num="17">Garnacho (17)</button>
          <button type="button" class="player-chip-btn" data-name="RASHFORD" data-num="10">Rashford (10)</button>
          <button type="button" class="player-chip-btn" data-name="HØJLUND" data-num="9">Højlund (9)</button>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px;">
          <label class="p-detail-badge-label">Huy hiệu tay áo:</label>
          <select id="detailSelectBadge" style="background:#111; color:#fff; border:1px solid #333; padding:6px 10px; border-radius:4px; font-size:0.85rem;">
            <option value="pl" selected>🦁 Ngoại Hạng Anh (+80K)</option>
            <option value="ucl">⭐ UEFA Champions League (+120K)</option>
            <option value="none">✖ Không gắn huy hiệu (+0đ)</option>
          </select>
        </div>
      </div>

      <!-- Size Selection -->
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <strong style="font-size:0.9rem;">Chọn Size (Chuẩn EU):</strong>
          <button class="size-advisor-btn" id="detailSizeCalcBtn"><i class="fa-solid fa-calculator"></i> Tính size chuẩn</button>
        </div>
        <div class="size-buttons-row" id="detailSizeRow">
          <button class="size-btn" type="button" data-size="S" aria-pressed="false">S</button>
          <button class="size-btn active" type="button" data-size="M" aria-pressed="true">M</button>
          <button class="size-btn" type="button" data-size="L" aria-pressed="false">L</button>
          <button class="size-btn" type="button" data-size="XL" aria-pressed="false">XL</button>
          <button class="size-btn" type="button" data-size="2XL" aria-pressed="false">2XL</button>
        </div>
      </div>

      <!-- Call To Actions -->
      <div class="p-detail-cta-row">
        <button class="btn btn-primary btn-large btn-block" id="btnDetailAddToCart">
          <i class="fa-solid fa-cart-plus"></i> THÊM VÀO GIỎ HÀNG
        </button>
        <button class="btn btn-secondary btn-large btn-block" id="btnDetailBuyNow">
          <i class="fa-solid fa-bolt"></i> MUA NGAY (GIAO 2H)
        </button>
      </div>

      <!-- Accordion Feature Info -->
      <div class="p-detail-accordions">
        <div class="accordion-item">
          <button class="accordion-trigger">
            <span><i class="fa-solid fa-list-check"></i> Đặc điểm nổi bật của áo đấu</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="accordion-content">
            <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 4px;">
              ${prod.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-trigger">
            <span><i class="fa-solid fa-truck"></i> Chính sách giao hàng & Đổi trả</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="accordion-content">
            <p>• Giao hỏa tốc 2H tại nội thành Hà Nội & TP. Hồ Chí Minh.</p>
            <p>• Đổi size miễn phí trong 7 ngày nếu không vừa vặn.</p>
            <p>• Đồng kiểm tra chất lượng áo trước khi thanh toán.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Setup detail interactive events
  let detailSelectedSize = 'M';

  const detailMainImg = document.getElementById('detailMainImg');
  const thumbFront = document.getElementById('detailThumbFront');
  const thumbBack = document.getElementById('detailThumbBack');
  const dName = document.getElementById('detailInputName');
  const dNum = document.getElementById('detailInputNumber');
  const dBadge = document.getElementById('detailSelectBadge');

  if (thumbFront && detailMainImg) {
    thumbFront.addEventListener('click', () => {
      detailMainImg.dataset.fallbackSvg = fallbackSvgData;
      detailMainImg.src = prod.image;
      detailMainImg.classList.remove('is-back');
      detailMainImg.alt = `${prod.name} - mặt trước`;
      thumbFront.classList.add('active');
      if (thumbBack) thumbBack.classList.remove('active');
    });
  }

  if (thumbBack && detailMainImg && prod.imageBack) {
    thumbBack.addEventListener('click', () => {
      detailMainImg.dataset.fallbackSvg = fallbackSvgBackData;
      detailMainImg.src = prod.imageBack;
      detailMainImg.classList.add('is-back');
      detailMainImg.alt = `${prod.name} - mặt sau`;
      thumbBack.classList.add('active');
      if (thumbFront) thumbFront.classList.remove('active');
    });
  }

  // Quick player buttons
  container.querySelectorAll('.player-chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      const num = btn.getAttribute('data-num');
      if (dName) dName.value = name;
      if (dNum) dNum.value = num;
      if (prod.imageBack && detailMainImg && thumbBack) {
        detailMainImg.dataset.fallbackSvg = fallbackSvgBackData;
        detailMainImg.src = prod.imageBack;
        detailMainImg.classList.add('is-back');
        detailMainImg.alt = `${prod.name} - mặt sau`;
        thumbBack.classList.add('active');
        if (thumbFront) thumbFront.classList.remove('active');
      }
    });
  });

  if (dBadge) {
    dBadge.addEventListener('change', () => {
      let badgeAdd = dBadge.value === 'pl' ? 80000 : (dBadge.value === 'ucl' ? 120000 : 0);
      const prEl = document.getElementById('detailCalculatedPrice');
      if (prEl) prEl.textContent = formatVND(prod.playerPrice + badgeAdd);
    });
  }

  // Size buttons on product detail
  container.querySelectorAll('#detailSizeRow .size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('#detailSizeRow .size-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      detailSelectedSize = btn.getAttribute('data-size');
    });
  });

  // Size advisor trigger
  const dSizeBtn = document.getElementById('detailSizeCalcBtn');
  if (dSizeBtn) {
    dSizeBtn.addEventListener('click', openSizeGuideModal);
  }

  // Add to cart from detail
  const btnAdd = document.getElementById('btnDetailAddToCart');
  if (btnAdd) {
    btnAdd.addEventListener('click', () => {
      const curBadge = dBadge ? dBadge.value : 'pl';
      let badgeAdd = curBadge === 'pl' ? 80000 : (curBadge === 'ucl' ? 120000 : 0);

      const cartItem = {
        cartId: 'item-' + Date.now(),
        productId: prod.id,
        name: prod.name,
        image: prod.image,
        price: prod.playerPrice + badgeAdd,
        size: detailSelectedSize,
        version: 'Bản Cầu Thủ (Player Heat.Rdy)',
        customName: dName ? dName.value.toUpperCase() : 'BRUNO',
        customNumber: dNum ? parseInt(dNum.value) || 8 : 8,
        badge: curBadge.toUpperCase(),
        kitType: prod.kitType,
        quantity: 1
      };

      addToCart(cartItem);
      showToast(`Đã thêm ${prod.name} vào giỏ!`, 'success');
      playCashChime();
      openCartDrawer();
    });
  }

  // Buy now button
  const btnBuyNow = document.getElementById('btnDetailBuyNow');
  if (btnBuyNow) {
    btnBuyNow.addEventListener('click', () => {
      const curBadge = dBadge ? dBadge.value : 'pl';
      let badgeAdd = curBadge === 'pl' ? 80000 : (curBadge === 'ucl' ? 120000 : 0);

      const cartItem = {
        cartId: 'item-' + Date.now(),
        productId: prod.id,
        name: prod.name,
        image: prod.image,
        price: prod.playerPrice + badgeAdd,
        size: detailSelectedSize,
        version: 'Bản Cầu Thủ (Player Heat.Rdy)',
        customName: dName ? dName.value.toUpperCase() : 'BRUNO',
        customNumber: dNum ? parseInt(dNum.value) || 8 : 8,
        badge: curBadge.toUpperCase(),
        kitType: prod.kitType,
        quantity: 1
      };

      addToCart(cartItem);
      navigateTo('checkout');
    });
  }

  // Accordion toggle
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parent = trigger.parentElement;
      parent.classList.toggle('active');
    });
  });

  // Render related products (other 3 kits)
  const relatedGrid = document.getElementById('relatedProductsGrid');
  if (relatedGrid) {
    const related = PRODUCTS.filter(p => p.id !== prod.id).slice(0, 3);
    relatedGrid.innerHTML = related.map(createProductCardHtml).join('');
  }
}
// ==================== 7. CART SYSTEM & DRAWER ====================
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('red_devils_cart');
    if (saved) {
      state.cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error loading cart', e);
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('red_devils_cart', JSON.stringify(state.cart));
  } catch (e) {
    console.error('Error saving cart', e);
  }
}

function addToCart(item) {
  if (!item.image) {
    const prod = PRODUCTS.find(p => p.id === item.productId);
    if (prod) item.image = prod.image;
  }
  state.cart.push(item);
  saveCartToStorage();
  updateCartBadges();
  renderCartDrawer();
  if (state.currentView === 'cart') {
    renderFullCartPage();
  }
}

function removeFromCart(cartId) {
  state.cart = state.cart.filter(item => item.cartId !== cartId);
  saveCartToStorage();
  updateCartBadges();
  renderCartDrawer();
  if (state.currentView === 'cart') {
    renderFullCartPage();
  }
  showToast('Đã xóa sản phẩm khỏi giỏ hàng', 'info');
}

function updateCartQuantity(cartId, delta) {
  const item = state.cart.find(i => i.cartId === cartId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(cartId);
      return;
    }
    saveCartToStorage();
    updateCartBadges();
    renderCartDrawer();
    if (state.currentView === 'cart') {
      renderFullCartPage();
    }
  }
}

function clearCart() {
  state.cart = [];
  saveCartToStorage();
  updateCartBadges();
  renderCartDrawer();
  if (state.currentView === 'cart') {
    renderFullCartPage();
  }
  showToast('Đã xóa toàn bộ giỏ hàng', 'info');
}

function getCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let discount = 0;
  if (state.discountRate > 0) {
    discount += subtotal * state.discountRate;
  }
  if (state.flatDiscount > 0) {
    discount += state.flatDiscount;
  }

  // Free shipping check
  const isFreeShip = subtotal >= state.freeShippingThreshold || state.voucherCode === 'FREESHIP';
  const shipping = subtotal > 0 ? (isFreeShip ? 0 : state.shippingFee) : 0;
  const finalTotal = Math.max(0, subtotal - discount + shipping);

  return { subtotal, discount, shipping, finalTotal, isFreeShip };
}

function updateCartBadges() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cartBadge');
  const navPill = document.getElementById('navCartPill');
  const drawerCount = document.getElementById('cartCountHeader');

  if (badge) badge.textContent = totalCount;
  if (navPill) navPill.textContent = totalCount;
  if (drawerCount) drawerCount.textContent = totalCount;
}

// Render Quick Slide-in Cart Drawer
function renderCartDrawer() {
  const container = document.getElementById('cartItemsList');
  if (!container) return;

  const { subtotal, discount, shipping, finalTotal, isFreeShip } = getCartTotals();

  // Free shipping progress bar
  const fsText = document.getElementById('freeShippingText');
  const fsFill = document.getElementById('shippingProgressFill');
  if (fsText && fsFill) {
    if (subtotal >= state.freeShippingThreshold || isFreeShip) {
      fsText.innerHTML = '🎉 Bạn đã được <strong>MIỄN PHÍ VẬN CHUYỂN</strong>!';
      fsFill.style.width = '100%';
    } else {
      const remaining = state.freeShippingThreshold - subtotal;
      const pct = Math.min(100, Math.round((subtotal / state.freeShippingThreshold) * 100));
      fsText.innerHTML = `Mua thêm <strong>${formatVND(remaining)}</strong> để được FREESHIP!`;
      fsFill.style.width = `${pct}%`;
    }
  }

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <i class="fa-solid fa-shirt"></i>
        <h4>Giỏ hàng của bạn đang trống</h4>
        <p>Hãy chọn cho mình chiếc áo Quỷ Đỏ ưng ý nhất nhé!</p>
        <button class="btn btn-primary btn-sm" style="margin-top: 15px;" data-navigate="shop" onclick="closeCartDrawer()">
          Khám Phá Áo Đấu
        </button>
      </div>
    `;
  } else {
    container.innerHTML = state.cart.map(item => {
      const prod = PRODUCTS.find(p => p.id === item.productId);
      const imgSrc = item.image || (prod ? prod.image : '');
      const svgThumb = generateJerseySvgContent(item.kitType || 'home', true, item.customName, item.customNumber);
      return `
        <div class="cart-row-item" style="grid-template-columns: 60px 1fr auto; padding: 12px 0;">
          <div class="c-item-img" style="width: 55px; height: 55px;">
            ${imgSrc ? `<img src="${imgSrc}" alt="${item.name}" style="width:100%;height:100%;object-fit:contain;">` : `<svg viewBox="0 0 500 580">${svgThumb}</svg>`}
          </div>
          <div class="c-item-details" style="padding: 0 10px;">
            <h5 style="font-size: 0.88rem;">${item.name}</h5>
            <div class="c-item-meta">
              <span>Size: <strong>${item.size}</strong></span>
              <span class="c-print-tag">In áo: #${item.customNumber} ${item.customName}</span>
              <span>Đơn giá: ${formatVND(item.price)}</span>
            </div>
            <div class="qty-stepper" style="margin-top: 6px;">
              <button class="qty-btn" onclick="updateCartQuantity('${item.cartId}', -1)">-</button>
              <span class="qty-num">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity('${item.cartId}', 1)">+</button>
            </div>
          </div>
          <div>
            <button class="c-item-remove-btn" onclick="removeFromCart('${item.cartId}')" title="Xóa">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Totals in drawer
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountRow = document.getElementById('cartDiscountRow');
  const discountEl = document.getElementById('cartDiscountAmount');
  const shippingEl = document.getElementById('cartShippingFee');
  const finalEl = document.getElementById('cartFinalTotal');

  if (subtotalEl) subtotalEl.textContent = formatVND(subtotal);
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'MIỄN PHÍ' : formatVND(shipping);
  if (finalEl) finalEl.textContent = formatVND(finalTotal);

  if (discountRow && discountEl) {
    if (discount > 0) {
      discountRow.style.display = 'flex';
      discountEl.textContent = `-${formatVND(discount)}`;
    } else {
      discountRow.style.display = 'none';
    }
  }
}

// Render Full Cart Page (View 5)
function renderFullCartPage() {
  const container = document.getElementById('cartPageItemsList');
  if (!container) return;

  const { subtotal, discount, shipping, finalTotal, isFreeShip } = getCartTotals();

  // Progress Bar on Cart Page
  const fsText = document.getElementById('cartPageFsText');
  const fsFill = document.getElementById('cartPageProgressFill');
  if (fsText && fsFill) {
    if (subtotal >= state.freeShippingThreshold || isFreeShip) {
      fsText.innerHTML = '🎉 Chúc mừng! Đơn hàng của bạn đã đủ điều kiện <strong>FREESHIP TOÀN QUỐC</strong>';
      fsFill.style.width = '100%';
    } else {
      const remaining = state.freeShippingThreshold - subtotal;
      const pct = Math.min(100, Math.round((subtotal / state.freeShippingThreshold) * 100));
      fsText.innerHTML = `Mua thêm <strong>${formatVND(remaining)}</strong> để nhận ưu đãi FREESHIP!`;
      fsFill.style.width = `${pct}%`;
    }
  }

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 50px 20px; color: #888;">
        <i class="fa-solid fa-shirt" style="font-size: 3rem; margin-bottom: 12px; opacity: 0.5;"></i>
        <h3>Giỏ hàng của bạn đang trống</h3>
        <p>Hãy tham quan bộ sưu tập và chọn cho mình chiếc áo đấu ưng ý nhất.</p>
        <button class="btn btn-primary" style="margin-top: 15px;" data-navigate="shop">
          <i class="fa-solid fa-layer-group"></i> Xem Toàn Bộ Áo Đấu
        </button>
      </div>
    `;
  } else {
    container.innerHTML = state.cart.map(item => {
      const prod = PRODUCTS.find(p => p.id === item.productId);
      const imgSrc = item.image || (prod ? prod.image : '');
      const svgThumb = generateJerseySvgContent(item.kitType || 'home', true, item.customName, item.customNumber);
      return `
        <div class="cart-row-item">
          <div class="c-item-prod">
            <div class="c-item-img">
              ${imgSrc ? `<img src="${imgSrc}" alt="${item.name}" style="width:100%;height:100%;object-fit:contain;">` : `<svg viewBox="0 0 500 580">${svgThumb}</svg>`}
            </div>
            <div class="c-item-details">
              <h5>${item.name}</h5>
              <div class="c-item-meta">
                <span>Phân loại: ${item.version || 'Bản Cầu Thủ'} • Size: <strong>${item.size}</strong></span>
                <span class="c-print-tag"><i class="fa-solid fa-bolt"></i> In tên số: #${item.customNumber} ${item.customName}</span>
                <span>Huy hiệu: ${item.badge}</span>
              </div>
            </div>
          </div>
          <div class="col-th-price">
            <strong>${formatVND(item.price)}</strong>
          </div>
          <div class="col-th-qty">
            <div class="qty-stepper">
              <button class="qty-btn" onclick="updateCartQuantity('${item.cartId}', -1)">-</button>
              <span class="qty-num">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity('${item.cartId}', 1)">+</button>
            </div>
          </div>
          <div class="col-th-subtotal">
            <strong class="text-red">${formatVND(item.price * item.quantity)}</strong>
          </div>
          <div class="col-th-action">
            <button class="c-item-remove-btn" onclick="removeFromCart('${item.cartId}')" title="Xóa khỏi giỏ">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Summary Totals on Cart Page
  const subEl = document.getElementById('cartPageSubtotal');
  const shipEl = document.getElementById('cartPageShipping');
  const totalEl = document.getElementById('cartPageTotal');
  const discRow = document.getElementById('cartPageDiscountRow');
  const discEl = document.getElementById('cartPageDiscountAmount');

  if (subEl) subEl.textContent = formatVND(subtotal);
  if (shipEl) shipEl.textContent = shipping === 0 ? 'MIỄN PHÍ' : formatVND(shipping);
  if (totalEl) totalEl.textContent = formatVND(finalTotal);

  if (discRow && discEl) {
    if (discount > 0) {
      discRow.style.display = 'flex';
      discEl.textContent = `-${formatVND(discount)}`;
    } else {
      discRow.style.display = 'none';
    }
  }
}

// Cart Drawer open/close utilities
function openCartDrawer() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (overlay && drawer) {
    overlay.classList.add('active');
    drawer.classList.add('active');
    renderCartDrawer();
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (overlay && drawer) {
    overlay.classList.remove('active');
    drawer.classList.remove('active');
  }
}

function setupCartListeners() {
  const trigger = document.getElementById('cartTrigger');
  const closeBtn = document.getElementById('cartCloseBtn');
  const overlay = document.getElementById('cartOverlay');

  if (trigger) trigger.addEventListener('click', openCartDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (overlay) overlay.addEventListener('click', closeCartDrawer);

  // Clear cart button
  const clearBtn = document.getElementById('btnClearCart');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn xóa toàn bộ sản phẩm trong giỏ hàng?')) {
        clearCart();
      }
    });
  }

  // Cart Drawer to Checkout
  const btnDrawerCheckout = document.getElementById('btnDrawerToCheckout');
  if (btnDrawerCheckout) {
    btnDrawerCheckout.addEventListener('click', () => {
      closeCartDrawer();
      navigateTo('checkout');
    });
  }

  const btnDrawerCartPage = document.getElementById('btnDrawerToCartPage');
  if (btnDrawerCartPage) {
    btnDrawerCartPage.addEventListener('click', () => {
      closeCartDrawer();
      navigateTo('cart');
    });
  }

  // Voucher apply buttons
  setupVoucherListeners();
}

function setupVoucherListeners() {
  const applyVoucherLogic = (code, msgEl) => {
    const clean = code.toUpperCase().trim();
    if (!clean) return;

    if (clean === 'GLORYMU') {
      state.voucherCode = 'GLORYMU';
      state.discountRate = 0.1; // 10%
      state.flatDiscount = 0;
      if (msgEl) {
        msgEl.innerHTML = '<span style="color:#4cd964;">✓ Áp dụng mã GLORYMU giảm 10% thành công!</span>';
      }
      showToast('Áp dụng mã GLORYMU thành công (-10%)', 'success');
      playTone(600, 'triangle', 0.15);
    } else if (clean === 'MUFC50K') {
      state.voucherCode = 'MUFC50K';
      state.flatDiscount = 50000;
      state.discountRate = 0;
      if (msgEl) {
        msgEl.innerHTML = '<span style="color:#4cd964;">✓ Áp dụng mã MUFC50K giảm 50.000đ!</span>';
      }
      showToast('Áp dụng mã MUFC50K thành công (-50K)', 'success');
      playTone(600, 'triangle', 0.15);
    } else if (clean === 'FREESHIP') {
      state.voucherCode = 'FREESHIP';
      state.discountRate = 0;
      state.flatDiscount = 0;
      if (msgEl) {
        msgEl.innerHTML = '<span style="color:#4cd964;">✓ Miễn phí vận chuyển toàn quốc!</span>';
      }
      showToast('Miễn phí vận chuyển toàn quốc!', 'success');
    } else {
      if (msgEl) {
        msgEl.innerHTML = '<span style="color:#ff3b30;">✕ Mã không hợp lệ hoặc đã hết lượt. Thử: GLORYMU</span>';
      }
      showToast('Mã voucher không hợp lệ', 'error');
    }

    renderCartDrawer();
    if (state.currentView === 'cart') renderFullCartPage();
    if (state.currentView === 'checkout') renderCheckoutView();
  };

  // Drawer voucher
  const btnDrawerVoucher = document.getElementById('btnApplyVoucher');
  const inputDrawerVoucher = document.getElementById('voucherInput');
  const msgDrawerVoucher = document.getElementById('voucherMsg');

  if (btnDrawerVoucher && inputDrawerVoucher) {
    btnDrawerVoucher.addEventListener('click', () => {
      applyVoucherLogic(inputDrawerVoucher.value, msgDrawerVoucher);
    });
  }

  // Cart page voucher
  const btnPageVoucher = document.getElementById('btnCartPageApplyVoucher');
  const inputPageVoucher = document.getElementById('cartPageVoucherInput');
  const msgPageVoucher = document.getElementById('cartPageVoucherMsg');

  if (btnPageVoucher && inputPageVoucher) {
    btnPageVoucher.addEventListener('click', () => {
      applyVoucherLogic(inputPageVoucher.value, msgPageVoucher);
    });
  }

  // Click on suggested coupon chips
  document.querySelectorAll('.coupon-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const code = chip.getAttribute('data-coupon');
      if (inputPageVoucher) inputPageVoucher.value = code;
      applyVoucherLogic(code, msgPageVoucher);
    });
  });
}

// ==================== 8. CHECKOUT PAGE SYSTEM ====================
function renderCheckoutView() {
  const itemsContainer = document.getElementById('checkoutItemsList');
  const countEl = document.getElementById('chkItemsCount');
  const subEl = document.getElementById('chkSubtotal');
  const shipEl = document.getElementById('chkShipping');
  const totalEl = document.getElementById('chkFinalTotal');
  const discRow = document.getElementById('chkDiscountRow');
  const discEl = document.getElementById('chkDiscountAmount');

  const { subtotal, discount, shipping, finalTotal } = getCartTotals();

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (countEl) countEl.textContent = totalCount;

  if (itemsContainer) {
    if (state.cart.length === 0) {
      itemsContainer.innerHTML = '<p style="color:#888; font-size:0.85rem;">Giỏ hàng trống.</p>';
    } else {
      itemsContainer.innerHTML = state.cart.map(item => `
        <div class="chk-item">
          <div class="chk-item-info">
            <strong>${item.name} (x${item.quantity})</strong>
            <span>Size: ${item.size} • In: #${item.customNumber} ${item.customName}</span>
          </div>
          <strong>${formatVND(item.price * item.quantity)}</strong>
        </div>
      `).join('');
    }
  }

  if (subEl) subEl.textContent = formatVND(subtotal);
  if (shipEl) shipEl.textContent = shipping === 0 ? 'MIỄN PHÍ' : formatVND(shipping);
  if (totalEl) totalEl.textContent = formatVND(finalTotal);

  if (discRow && discEl) {
    if (discount > 0) {
      discRow.style.display = 'flex';
      discEl.textContent = `-${formatVND(discount)}`;
    } else {
      discRow.style.display = 'none';
    }
  }
}

function setupCheckoutListeners() {
  // Payment Method selection
  const payCards = document.querySelectorAll('.pay-method-card input');

  payCards.forEach(input => {
    input.addEventListener('change', (e) => {
      document.querySelectorAll('.pay-method-card').forEach(c => c.classList.remove('active'));
      e.target.closest('.pay-method-card').classList.add('active');
    });
  });

  // Shipping Method selection
  const shipRadios = document.querySelectorAll('input[name="shippingMethod"]');
  shipRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      document.querySelectorAll('.method-card').forEach(c => c.classList.remove('active'));
      e.target.closest('.method-card').classList.add('active');

      if (e.target.value === 'express') {
        state.shippingFee = 50000;
      } else {
        state.shippingFee = 30000;
      }
      renderCheckoutView();
    });
  });

  // Full Checkout Form Submit
  const checkoutForm = document.getElementById('fullCheckoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (state.cart.length === 0) {
        showToast('Giỏ hàng trống! Hãy chọn ít nhất 1 áo đấu.', 'error');
        return;
      }

      const name = document.getElementById('chkFullName').value;
      const phone = document.getElementById('chkPhone').value;
      const address = document.getElementById('chkAddress').value;
      const city = document.getElementById('chkCity').value;

      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const newOrderId = `MU-2024-${randomSuffix}`;

      // Save order to history for tracking
      const orderData = {
        orderId: newOrderId,
        date: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) + ' - ' + new Date().toLocaleDateString('vi-VN'),
        customerName: name,
        phone: phone,
        address: `${address}, ${city}`,
        items: [...state.cart],
        totals: getCartTotals(),
        status: 'Đang Xử Lý & In Tên Số'
      };

      try {
        localStorage.setItem(`order_${newOrderId}`, JSON.stringify(orderData));
        localStorage.setItem('latest_order_id', newOrderId);
      } catch (err) {}

      // Clear cart
      state.cart = [];
      saveCartToStorage();
      updateCartBadges();

      // Show Order Success Modal
      const modal = document.getElementById('successModal');
      const codeBadge = document.getElementById('orderSuccessCode');
      if (codeBadge) codeBadge.textContent = newOrderId;
      if (modal) modal.classList.add('active');

      triggerConfetti();
      playCashChime();
    });
  }

  // Order Success Modal Actions
  const btnTrackSuccess = document.getElementById('btnTrackSuccessOrder');
  const btnContinueSuccess = document.getElementById('btnContinueAfterSuccess');
  const successModal = document.getElementById('successModal');

  if (btnTrackSuccess) {
    btnTrackSuccess.addEventListener('click', () => {
      if (successModal) successModal.classList.remove('active');
      const code = document.getElementById('orderSuccessCode').textContent;
      navigateTo('tracking', { code });
    });
  }

  if (btnContinueSuccess) {
    btnContinueSuccess.addEventListener('click', () => {
      if (successModal) successModal.classList.remove('active');
      navigateTo('home');
    });
  }
}

// ==================== 9. ORDER TRACKING SYSTEM ====================
function lookupOrder(code) {
  const clean = code.trim().toUpperCase();
  const card = document.getElementById('trackingResultCard');
  if (!card) return;

  const orderIdEl = document.getElementById('trOrderId');
  const dateEl = document.getElementById('trOrderDate');
  const statusBadge = document.getElementById('trStatusBadge');
  const itemsContainer = document.getElementById('trItemsList');
  const totalAmountEl = document.getElementById('trTotalAmount');

  let order = null;
  try {
    const saved = localStorage.getItem(`order_${clean}`);
    if (saved) {
      order = JSON.parse(saved);
    }
  } catch (e) {}

  // If no exact match, create demo sample order for demonstration
  if (!order) {
    order = {
      orderId: clean || 'MU-2024-8842',
      date: '15:20 - Hôm nay',
      customerName: 'CĐV Quỷ Đỏ',
      status: 'ĐANG IN TÊN SỐ CHÍNH HÃNG',
      items: [
        {
          name: 'Áo Sân Nhà 2024/25 - Manchester United Home Kit',
          size: 'M',
          customName: 'BRUNO',
          customNumber: 8,
          price: 1330000,
          quantity: 1
        }
      ],
      totals: { finalTotal: 1330000 }
    };
  }

  card.style.display = 'block';
  if (orderIdEl) orderIdEl.textContent = order.orderId;
  if (dateEl) dateEl.textContent = order.date;
  if (statusBadge) statusBadge.textContent = order.status || 'ĐANG IN TÊN SỐ';

  if (itemsContainer) {
    itemsContainer.innerHTML = order.items.map(item => `
      <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.05); font-size:0.85rem;">
        <div>
          <strong>${item.name} (x${item.quantity})</strong>
          <div style="font-size:0.75rem; color:#aaa;">Size: ${item.size} • In áo: #${item.customNumber} ${item.customName}</div>
        </div>
        <strong>${formatVND(item.price * item.quantity)}</strong>
      </div>
    `).join('');
  }

  if (totalAmountEl) {
    totalAmountEl.textContent = formatVND(order.totals ? order.totals.finalTotal : 1330000);
  }

  showToast(`Tìm thấy thông tin đơn hàng ${order.orderId}`, 'success');
}

function setupTrackingListeners() {
  const form = document.getElementById('trackingSearchForm');
  const input = document.getElementById('trackingCodeInput');

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!input.value.trim()) {
        showToast('Vui lòng nhập mã đơn hàng', 'error');
        return;
      }
      lookupOrder(input.value);
    });
  }

  // Sample code click
  document.querySelectorAll('.sample-code-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      if (input) input.value = code;
      lookupOrder(code);
    });
  });
}

// ==================== 10. INTERACTIVE SIZE CALCULATOR ====================
function calculateRecommendedSize() {
  const heightSlider = document.getElementById('heightSlider');
  const weightSlider = document.getElementById('weightSlider');
  const heightVal = document.getElementById('heightValue');
  const weightVal = document.getElementById('weightValue');
  const badgeEl = document.getElementById('recommendedSizeBadge');
  const noteEl = document.getElementById('recommendedSizeNote');

  if (!heightSlider || !weightSlider) return;

  const h = parseInt(heightSlider.value);
  const w = parseInt(weightSlider.value);

  if (heightVal) heightVal.textContent = `${h} cm`;
  if (weightVal) weightVal.textContent = `${w} kg`;

  // BMI-based size algorithm
  let size = 'M';
  let note = 'Phù hợp với dáng người của bạn, vừa vặn ngực & vai.';

  if (h <= 165 && w <= 60) {
    size = 'S';
    note = 'Size S vừa vặn với chiều cao và cân nặng của bạn, thân áo dài 68cm.';
  } else if (h <= 175 && w <= 70) {
    size = 'M';
    note = 'Size M tiêu chuẩn, thân áo 71cm, vòng ngực 98cm thoải mái vận động.';
  } else if (h <= 180 && w <= 80) {
    size = 'L';
    note = 'Size L giúp vai cử động thoải mái khi chơi thể thao hoặc mặc dạo phố.';
  } else if (h <= 186 && w <= 90) {
    size = 'XL';
    note = 'Size XL phom chuẩn thể thao, vòng ngực 110cm rộng rãi.';
  } else {
    size = '2XL';
    note = 'Size 2XL cực kỳ rộng rãi, thoải mái tối đa cho người có thể hình đậm.';
  }

  if (badgeEl) badgeEl.textContent = size;
  if (noteEl) noteEl.textContent = note;

  return size;
}

function openSizeGuideModal() {
  const modal = document.getElementById('sizeGuideModal');
  if (modal) {
    modal.classList.add('active');
    calculateRecommendedSize();
  }
}

function closeSizeGuideModal() {
  const modal = document.getElementById('sizeGuideModal');
  if (modal) modal.classList.remove('active');
}

function setupSizeGuideListeners() {
  const openBtns = [
    document.getElementById('openSizeGuideModal'),
    document.getElementById('teaserSizeGuideBtn'),
    document.getElementById('footerSizeGuideBtn')
  ];

  openBtns.forEach(b => {
    if (b) b.addEventListener('click', openSizeGuideModal);
  });

  const closeBtn = document.getElementById('sizeGuideCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeSizeGuideModal);

  const hSlider = document.getElementById('heightSlider');
  const wSlider = document.getElementById('weightSlider');

  if (hSlider) hSlider.addEventListener('input', calculateRecommendedSize);
  if (wSlider) wSlider.addEventListener('input', calculateRecommendedSize);

  // Apply button
  const applyBtn = document.getElementById('btnApplyCalculatedSize');
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const rec = calculateRecommendedSize();

      // Update active size button on product detail
      const recommendedSizeButton = document.querySelector(`#detailSizeRow .size-btn[data-size="${rec}"]`);
      if (recommendedSizeButton) recommendedSizeButton.click();

      closeSizeGuideModal();
      showToast(`Đã chọn Size ${rec} cho áo đấu của bạn!`, 'success');
      playTone(500, 'sine', 0.1);
    });
  }
}

// ==================== 11. WEB AUDIO API SOUND SYSTEM ====================
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
}

function playTone(freq, type = 'sine', duration = 0.2) {
  try {
    initAudio();
    if (!audioCtx || audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function playCashChime() {
  // Two pleasant tones simulating cash register chime
  playTone(523.25, 'sine', 0.15); // C5
  setTimeout(() => playTone(659.25, 'sine', 0.25), 100); // E5
}

function playStadiumSound(soundType) {
  initAudio();
  if (!audioCtx) return;

  if (soundType === 'chant') {
    // Synthesize Glory Glory Man United melody snippet! (G, G, G, E, G, A, G)
    const melody = [
      { f: 392, d: 0.25 }, // G4
      { f: 392, d: 0.25 }, // G4
      { f: 392, d: 0.25 }, // G4
      { f: 329.6, d: 0.25 }, // E4
      { f: 392, d: 0.4 }, // G4
      { f: 440, d: 0.3 }, // A4
      { f: 392, d: 0.6 } // G4
    ];
    melody.forEach((note, idx) => {
      setTimeout(() => {
        playTone(note.f, 'triangle', note.d);
      }, idx * 280);
    });
    showToast('🎵 Đang phát: Glory Glory Man United Chant!', 'info');
  } else if (soundType === 'whistle') {
    // Referee double whistle
    playTone(2400, 'sine', 0.15);
    setTimeout(() => playTone(2400, 'sine', 0.25), 180);
    showToast('⚽ Tiếng còi trọng tài khai cuộc!', 'info');
  } else if (soundType === 'roar') {
    // Crowd noise simulation using noise buffer
    try {
      const bufferSize = audioCtx.sampleRate * 2.5;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, audioCtx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 1.2);
      filter.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 2.5);

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.25, audioCtx.currentTime + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2.5);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      noise.start();
      showToast('📢 Tiếng reo hò rền vang Old Trafford!', 'info');
    } catch (e) {}
  } else if (soundType === 'anthem') {
    // Stadium drums
    const drumBeats = [0, 200, 400, 600, 800, 1000];
    drumBeats.forEach(t => {
      setTimeout(() => playTone(90, 'sine', 0.18), t);
    });
    showToast('🥁 Nhịp trống hào hùng từ khán đài Stretford End!', 'info');
  }
}

function setupSoundListeners() {
  const headerSoundBtn = document.getElementById('soundBtn');
  if (headerSoundBtn) {
    headerSoundBtn.addEventListener('click', () => {
      headerSoundBtn.classList.toggle('playing');
      playStadiumSound('chant');
    });
  }

  document.querySelectorAll('.sound-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sType = btn.getAttribute('data-sound');
      playStadiumSound(sType);
    });
  });
}

// ==================== 12. CONFETTI FIREWORKS SYSTEM ====================
function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#DA291C', '#FFE500', '#FFFFFF', '#C8A45D', '#FF3B30'];
  const particles = [];
  const count = 120;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: canvas.width * 0.5,
      y: canvas.height * 0.4,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      alpha: 1
    });
  }

  let animId;
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let activeCount = 0;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.vRot;
      p.alpha -= 0.012;

      if (p.alpha > 0) {
        activeCount++;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (activeCount > 0) {
      animId = requestAnimationFrame(updateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animId);
    }
  }

  updateConfetti();
}

// ==================== 13. TOAST NOTIFICATION SYSTEM ====================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  const icons = {
    success: '<i class="fa-solid fa-circle-check" style="color: #4cd964; font-size: 1.1rem;"></i>',
    error: '<i class="fa-solid fa-circle-xmark" style="color: #ff3b30; font-size: 1.1rem;"></i>',
    info: '<i class="fa-solid fa-circle-info" style="color: #FFE500; font-size: 1.1rem;"></i>'
  };

  toast.innerHTML = `
    ${icons[type] || icons.info}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==================== 13b. HISTORY, MANAGERS & QUIZ SYSTEM ====================
const MANAGERS = [
  {
    id: 'albut',
    name: 'A. H. Albut',
    period: '1892 - 1900',
    category: 'classic',
    nationality: 'Anh 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    matches: 265,
    wins: 130,
    winRate: '49.1%',
    trophies: ['Thư ký điều hành đầu tiên', 'Khai sinh thời Newton Heath'],
    badge: 'Cổ Điển',
    badgeClass: 'badge-classic',
    desc: 'Vị thư ký kiêm quản lý chính thức đầu tiên phụ trách các vấn đề của Newton Heath F.C. (tiền thân của Manchester United).'
  },
  {
    id: 'west',
    name: 'James West',
    period: '1900 - 1903',
    category: 'classic',
    nationality: 'Anh 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    matches: 113,
    wins: 46,
    winRate: '40.7%',
    trophies: ['Chứng kiến đổi tên CLB', 'Khai sinh sắc áo Đỏ (1902)'],
    badge: 'Cổ Điển',
    badgeClass: 'badge-classic',
    desc: 'Chứng kiến thời khắc lịch sử khi CLB được cứu khỏi phá sản và chính thức mang tên Manchester United vào năm 1902.'
  },
  {
    id: 'mangnall',
    name: 'Ernest Mangnall',
    period: '1903 - 1912',
    category: 'legend',
    subCategories: ['classic'],
    nationality: 'Anh 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    matches: 373,
    wins: 202,
    winRate: '54.2%',
    trophies: ['2 First Division (1908, 1911)', '1 FA Cup (1909)', '2 Charity Shield'],
    badge: 'Huyền Thoại',
    badgeClass: 'badge-legend',
    desc: 'Kiến trúc sư đưa Quỷ Đỏ giành chức Vô địch Nước Anh đầu tiên trong lịch sử (1908) và khánh thành thánh địa Old Trafford năm 1910.'
  },
  {
    id: 'bentley',
    name: 'John Bentley',
    period: '1912 - 1914',
    category: 'classic',
    nationality: 'Anh 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    matches: 82,
    wins: 36,
    winRate: '43.9%',
    trophies: ['Dẫn dắt trước Thế chiến I'],
    badge: 'Cổ Điển',
    badgeClass: 'badge-classic',
    desc: 'Tiếp quản chiếc ghế nóng từ Mangnall và giúp MU giữ vững vị thế tại giải VĐQG trước khi Thế chiến thứ nhất bùng nổ.'
  },
  {
    id: 'robson',
    name: 'Jack Robson',
    period: '1914 - 1921',
    category: 'classic',
    nationality: 'Anh 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    matches: 139,
    wins: 41,
    winRate: '29.5%',
    trophies: ['Duy trì CLB qua Thế chiến I'],
    badge: 'Cổ Điển',
    badgeClass: 'badge-classic',
    desc: 'Vị thuyền trưởng tận tụy chèo lái Manchester United duy trì hoạt động và thi đấu giải thời chiến trong suốt Thế chiến thứ nhất.'
  },
  {
    id: 'chapman',
    name: 'John Chapman',
    period: '1921 - 1926',
    category: 'classic',
    nationality: 'Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    matches: 221,
    wins: 86,
    winRate: '38.9%',
    trophies: ['Thăng hạng First Division (1925)'],
    badge: 'Cổ Điển',
    badgeClass: 'badge-classic',
    desc: 'HLV người Scotland đầu tiên của United, giúp đội bóng thăng hạng trở lại giải đấu cao nhất nước Anh vào năm 1925.'
  },
  {
    id: 'hilditch',
    name: 'Clarence Hilditch',
    period: '1926 - 1927',
    category: 'classic',
    nationality: 'Anh 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    matches: 33,
    wins: 10,
    winRate: '30.3%',
    trophies: ['Cầu thủ kiêm HLV đầu tiên'],
    badge: 'Cổ Điển',
    badgeClass: 'badge-classic',
    desc: 'Cầu thủ kiêm HLV trưởng đầu tiên và duy nhất trong kỷ nguyên sơ khai của Manchester United.'
  },
  {
    id: 'bamlett',
    name: 'Herbert Bamlett',
    period: '1927 - 1931',
    category: 'classic',
    nationality: 'Anh 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    matches: 183,
    wins: 57,
    winRate: '31.1%',
    trophies: ['Cựu trọng tài Chung kết FA Cup 1914'],
    badge: 'Cổ Điển',
    badgeClass: 'badge-classic',
    desc: 'Từng là trọng tài bắt trận chung kết FA Cup 1914 trước khi chuyển sang dẫn dắt Manchester United trong thời kỳ suy thoái kinh tế.'
  },
  {
    id: 'crickmer',
    name: 'Walter Crickmer',
    period: '1931 - 1932 & 1937 - 1945',
    category: 'classic',
    nationality: 'Anh 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    matches: 119,
    wins: 49,
    winRate: '41.2%',
    trophies: ['2 nhiệm kỳ HLV trưởng', 'Thư ký cống hiến 32 năm'],
    badge: 'Cổ Điển',
    badgeClass: 'badge-classic',
    desc: 'Thư ký huyền thoại 2 lần đứng ra làm HLV tạm quyền cứu nguy CLB. Ông hy sinh anh dũng trong thảm họa Munich 1958.'
  },
  {
    id: 'duncan',
    name: 'Scott Duncan',
    period: '1932 - 1937',
    category: 'classic',
    nationality: 'Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    matches: 235,
    wins: 92,
    winRate: '39.1%',
    trophies: ['Vô địch Second Division (1936)'],
    badge: 'Cổ Điển',
    badgeClass: 'badge-classic',
    desc: 'Chiến lược gia người Scotland đưa Quỷ Đỏ đoạt chức vô địch giải Hạng Nhì 1936 cùng lối đá phòng ngự phản công sắc bén.'
  },
  {
    id: 'busby',
    name: 'Sir Matt Busby',
    period: '1945 - 1969 & 1970 - 1971',
    category: 'legend',
    subCategories: ['classic'],
    nationality: 'Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    matches: 1141,
    wins: 576,
    winRate: '50.5%',
    trophies: ['1 Cúp C1 Châu Âu (1968)', '5 First Division', '2 FA Cup', '5 Charity Shield'],
    badge: 'Huyền Thoại Bất Tử',
    badgeClass: 'badge-legend',
    desc: 'Biểu tượng vĩ đại khai sinh dàn sao "Busby Babes", kiên cường hồi sinh từ tro tàn Munich 1958 để đưa MU đăng quang Cúp C1 Châu Âu 1968.'
  },
  {
    id: 'mcguinness',
    name: 'Wilf McGuinness',
    period: '1969 - 1970',
    category: 'classic',
    nationality: 'Anh 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    matches: 87,
    wins: 32,
    winRate: '36.8%',
    trophies: ['Bán kết Cúp Liên đoàn', 'Bán kết Cúp FA'],
    badge: 'Cổ Điển',
    badgeClass: 'badge-classic',
    desc: 'Cựu danh thủ thuộc thế hệ Busby Babes dũng cảm tiếp nhận trọng trách thay thế Sir Matt Busby ở tuổi 31.'
  },
  {
    id: 'ofarrell',
    name: 'Frank O\'Farrell',
    period: '1971 - 1972',
    category: 'classic',
    nationality: 'Ireland 🇮🇪',
    matches: 81,
    wins: 30,
    winRate: '37.0%',
    trophies: ['HLV người Ireland đầu tiên'],
    badge: 'Cổ Điển',
    badgeClass: 'badge-classic',
    desc: 'Chiến lược gia người Ireland từng đưa Leicester vào chung kết FA Cup trước khi chuyển đến lãnh xướng chiếc ghế nóng tại Old Trafford.'
  },
  {
    id: 'docherty',
    name: 'Tommy Docherty',
    period: '1972 - 1977',
    category: 'legend',
    subCategories: ['classic'],
    nationality: 'Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    matches: 228,
    wins: 107,
    winRate: '46.9%',
    trophies: ['1 FA Cup (1977)', '1 Second Division (1975)'],
    badge: 'Huyền Thoại',
    badgeClass: 'badge-legend',
    desc: '"The Doc" mang lại thứ bóng đá tấn công rực lửa, tái thiết đội hình và đập tan hy vọng ăn ba của Liverpool ở trận chung kết FA Cup 1977.'
  },
  {
    id: 'sexton',
    name: 'Dave Sexton',
    period: '1977 - 1981',
    category: 'classic',
    nationality: 'Anh 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    matches: 201,
    wins: 81,
    winRate: '40.3%',
    trophies: ['1 Charity Shield (1977)', 'Á quân First Division (1980)'],
    badge: 'Cổ Điển',
    badgeClass: 'badge-classic',
    desc: 'Chiến lược gia điềm tĩnh nâng cao Charity Shield 1977, dẫn dắt đội bóng vào chung kết FA Cup 1979 và về nhì tại First Division 1980.'
  },
  {
    id: 'atkinson',
    name: 'Ron Atkinson',
    period: '1981 - 1986',
    category: 'legend',
    subCategories: ['classic'],
    nationality: 'Anh 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    matches: 292,
    wins: 146,
    winRate: '50.0%',
    trophies: ['2 FA Cup (1983, 1985)', '1 Charity Shield (1983)'],
    badge: 'Huyền Thoại',
    badgeClass: 'badge-legend',
    desc: '"Big Ron" đưa về siêu tiền vệ Bryan Robson, biến United thành thế lực đấu cúp đáng sợ với 2 chức vô địch FA Cup 1983 và 1985.'
  },
  {
    id: 'ferguson',
    name: 'Sir Alex Ferguson',
    period: '1986 - 2013',
    category: 'legend',
    subCategories: ['classic'],
    nationality: 'Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    matches: 1500,
    wins: 895,
    winRate: '59.7%',
    trophies: ['38 danh hiệu đỉnh cao: 13 Premier League', '2 Champions League', '5 FA Cup', 'Cú Ăn Ba 1999'],
    badge: 'Vĩ Đại Nhất Mọi Thời Đại',
    badgeClass: 'badge-legend',
    desc: 'Nhà cầm quân vĩ đại nhất lịch sử bóng đá thế giới. 26 năm hoàng kim biến Manchester United thành đế chế toàn cầu không thể xô đổ.'
  },
  {
    id: 'moyes',
    name: 'David Moyes',
    period: '2013 - 2014',
    category: 'post-saf',
    nationality: 'Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    matches: 51,
    wins: 27,
    winRate: '52.9%',
    trophies: ['1 FA Community Shield (2013)'],
    badge: 'Hậu Sir Alex',
    badgeClass: 'badge-postsaf',
    desc: '"The Chosen One" được chính Sir Alex Ferguson tiến cử, mang về danh hiệu Siêu Cúp Anh 2013 ngay trong trận chính thức đầu tiên.'
  },
  {
    id: 'giggs',
    name: 'Ryan Giggs',
    period: '2014 (Tạm quyền)',
    category: 'legend',
    subCategories: ['post-saf'],
    nationality: 'Xứ Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    matches: 4,
    wins: 2,
    winRate: '50.0%',
    trophies: ['Kỷ lục 963 trận thi đấu', '34 danh hiệu cầu thủ'],
    badge: 'Huyền Thoại',
    badgeClass: 'badge-legend',
    desc: 'Huyền thoại ra sân nhiều nhất lịch sử MU đảm nhận vai trò HLV tạm quyền 4 trận cuối mùa 2013/14 trong sự tôn kính của toàn bộ người hâm mộ.'
  },
  {
    id: 'vangaal',
    name: 'Louis van Gaal',
    period: '2014 - 2016',
    category: 'post-saf',
    nationality: 'Hà Lan 🇳🇱',
    matches: 103,
    wins: 54,
    winRate: '52.4%',
    trophies: ['1 FA Cup (2016)'],
    badge: 'Hậu Sir Alex',
    badgeClass: 'badge-postsaf',
    desc: '"Tulip Thép" mang phong cách kiểm soát triệt để, đoạt Cúp FA 2016 và mở ra cơ hội tỏa sáng cho lứa sao trẻ như Marcus Rashford.'
  },
  {
    id: 'mourinho',
    name: 'José Mourinho',
    period: '2016 - 2018',
    category: 'post-saf',
    nationality: 'Bồ Đào Nha 🇵🇹',
    matches: 144,
    wins: 84,
    winRate: '58.3%',
    trophies: ['1 UEFA Europa League (2017)', '1 EFL Cup (2017)', '1 Community Shield (2016)'],
    badge: 'Hậu Sir Alex',
    badgeClass: 'badge-postsaf',
    desc: '"Người đặc biệt" đem về cú đúp danh hiệu Europa League & League Cup 2016/17, hoàn tất bộ sưu tập cúp châu lục duy nhất còn thiếu của Quỷ Đỏ.'
  },
  {
    id: 'solskjaer',
    name: 'Ole Gunnar Solskjær',
    period: '2018 - 2021',
    category: 'legend',
    subCategories: ['post-saf'],
    nationality: 'Na Uy 🇳🇴',
    matches: 168,
    wins: 91,
    winRate: '54.2%',
    trophies: ['Á quân Premier League (2021)', 'Kỷ lục 29 trận bất bại sân khách'],
    badge: 'Huyền Thoại',
    badgeClass: 'badge-legend',
    desc: 'Người hùng Nou Camp 1999 trở lại làm bùng cháy tinh thần Quỷ Đỏ, xác lập kỷ lục vô tiền khoáng hậu 29 trận bất bại liên tiếp trên sân khách.'
  },
  {
    id: 'rangnick',
    name: 'Ralf Rangnick',
    period: '2021 - 2022 (Tạm quyền)',
    category: 'post-saf',
    nationality: 'Đức 🇩🇪',
    matches: 29,
    wins: 11,
    winRate: '37.9%',
    trophies: ['Bậc thầy Gegenpressing hiện đại'],
    badge: 'Hậu Sir Alex',
    badgeClass: 'badge-postsaf',
    desc: 'Nhà tư tưởng bóng đá Đức mang đến những phân tích chiến thuật hiện đại và đặt nền móng cho kế hoạch tái thiết cơ cấu thể thao.'
  },
  {
    id: 'tenhag',
    name: 'Erik ten Hag',
    period: '2022 - 2024',
    category: 'post-saf',
    nationality: 'Hà Lan 🇳🇱',
    matches: 128,
    wins: 70,
    winRate: '54.7%',
    trophies: ['1 Carabao Cup (2023)', '1 FA Cup (2024)'],
    badge: 'Hậu Sir Alex',
    badgeClass: 'badge-postsaf',
    desc: 'Giải tỏa cơn khát 6 năm trắng danh hiệu với chức vô địch Carabao Cup 2023 và đánh bại Man City 2-1 tại Wembley để nâng cao Cúp FA 2024.'
  },
  {
    id: 'amorim',
    name: 'Rúben Amorim',
    period: '2024 - Hiện tại',
    category: 'current',
    nationality: 'Bồ Đào Nha 🇵🇹',
    matches: 'Đang cập nhật',
    wins: 'Mới nhậm chức',
    winRate: 'Kỳ vọng lớn',
    trophies: ['2 VĐQG Bồ Đào Nha (Sporting CP)', 'Sơ đồ 3-4-2-1 biến ảo'],
    badge: 'HLV Đương Nhiệm',
    badgeClass: 'badge-current',
    desc: 'Tân thuyền trưởng tài ba mang sơ đồ 3-4-2-1 cùng triết lý bóng đá cường độ cao, mở ra kỷ nguyên mới đầy hứa hẹn dưới sự bảo trợ của INEOS.'
  }
];

function renderManagers(query = '', filter = 'all') {
  const container = document.getElementById('managersGridContainer');
  if (!container) return;

  const q = query.toLowerCase().trim();

  const filtered = MANAGERS.filter(m => {
    const matchQuery = !q || m.name.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q) || m.nationality.toLowerCase().includes(q);
    let matchFilter = true;
    if (filter === 'legend') {
      matchFilter = m.category === 'legend' || (m.subCategories && m.subCategories.includes('legend'));
    } else if (filter === 'classic') {
      matchFilter = m.category === 'classic' || (m.subCategories && m.subCategories.includes('classic'));
    } else if (filter === 'post-saf') {
      matchFilter = m.category === 'post-saf' || (m.subCategories && m.subCategories.includes('post-saf'));
    } else if (filter === 'current') {
      matchFilter = m.category === 'current';
    }
    return matchQuery && matchFilter;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--color-text-subtle);">
        <i class="fa-solid fa-user-slash" style="font-size: 2.5rem; margin-bottom: 12px; opacity: 0.5;"></i>
        <h4>Không tìm thấy huấn luyện viên nào phù hợp</h4>
        <p>Thử tìm với tên như "Ferguson", "Busby", "Amorim", "Ten Hag", "Mourinho"...</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(m => {
    const cardClass = m.category === 'legend' ? 'manager-card legend-card' : (m.category === 'current' ? 'manager-card current-card' : 'manager-card');
    const trophiesHtml = m.trophies.map(t => `<span class="mgr-trophy-pill"><i class="fa-solid fa-trophy"></i> ${t}</span>`).join('');
    const avatarIcon = m.category === 'legend' ? 'fa-star' : (m.category === 'current' ? 'fa-bolt' : 'fa-user-tie');

    return `
      <div class="${cardClass}">
        <span class="mgr-badge ${m.badgeClass}">${m.badge}</span>
        <div class="mgr-card-header">
          <div class="mgr-avatar">
            <i class="fa-solid ${avatarIcon}"></i>
          </div>
          <div class="mgr-main-info">
            <h4 class="mgr-name">${m.name}</h4>
            <div class="mgr-meta">
              <span><i class="fa-regular fa-calendar"></i> ${m.period}</span>
              <span>•</span>
              <span>${m.nationality}</span>
            </div>
          </div>
        </div>

        <div class="mgr-stats-grid">
          <div class="mgr-stat-box">
            <div class="mgr-stat-val">${m.matches}</div>
            <div class="mgr-stat-lbl">Số Trận</div>
          </div>
          <div class="mgr-stat-box">
            <div class="mgr-stat-val">${m.wins}</div>
            <div class="mgr-stat-lbl">Thắng</div>
          </div>
          <div class="mgr-stat-box">
            <div class="mgr-stat-val text-gold">${m.winRate}</div>
            <div class="mgr-stat-lbl">Tỷ Lệ</div>
          </div>
        </div>

        <div class="mgr-trophies-wrap">
          <h5>Thành Tích & Dấu Ấn</h5>
          <div class="mgr-trophy-tags">
            ${trophiesHtml}
          </div>
        </div>

        <p class="mgr-desc">${m.desc}</p>
      </div>
    `;
  }).join('');
}

const QUIZ_QUESTIONS = [
  {
    question: "Manchester United được thành lập vào năm nào và dưới tên gọi ban đầu là gì?",
    options: [
      "1878 - Newton Heath LYR F.C.",
      "1902 - Manchester Central F.C.",
      "1888 - Red Devils F.C.",
      "1910 - Stretford United"
    ],
    correctIndex: 0,
    explanation: "Đội bóng được thành lập năm 1878 bởi các công nhân công ty đường sắt Lancashire & Yorkshire Railway với tên gọi Newton Heath LYR F.C. trước khi đổi tên thành Manchester United vào năm 1902."
  },
  {
    question: "Sir Alex Ferguson đã giành được tổng cộng bao nhiêu danh hiệu chính thức cùng Manchester United trong 26 năm cầm quân?",
    options: [
      "25 danh hiệu",
      "38 danh hiệu",
      "30 danh hiệu",
      "42 danh hiệu"
    ],
    correctIndex: 1,
    explanation: "Sir Alex Ferguson đã giành tổng cộng 38 danh hiệu chính thức (bao gồm 13 Premier League, 2 Champions League, 5 FA Cup, 4 Cúp Liên đoàn...) trở thành HLV vĩ đại nhất lịch sử."
  },
  {
    question: "Ai là người ghi bàn ấn định chiến thắng 2-1 ở phút bù giờ 90+3 trong trận chung kết Champions League 1999 tại Camp Nou?",
    options: [
      "David Beckham",
      "Teddy Sheringham",
      "Ole Gunnar Solskjær",
      "Ryan Giggs"
    ],
    correctIndex: 2,
    explanation: "Teddy Sheringham gỡ hòa 1-1 ở phút 90+1 và Ole Gunnar Solskjær đệm bóng cận thành ở phút 90+3 đưa MU hoàn tất Cú Ăn Ba vĩ đại nhất lịch sử."
  },
  {
    question: "Đội bóng Anh đầu tiên trong lịch sử đăng quang Cúp C1 Châu Âu vào năm 1968 dưới sự dẫn dắt của ai?",
    options: [
      "Sir Alex Ferguson",
      "Sir Matt Busby",
      "Ernest Mangnall",
      "Tommy Docherty"
    ],
    correctIndex: 1,
    explanation: "Sir Matt Busby cùng bộ ba Trinity (Bobby Charlton, George Best, Denis Law) đã vượt qua bi kịch Munich 1958 để đưa MU vô địch Cúp C1 vào năm 1968 sau chiến thắng 4-1 trước Benfica."
  },
  {
    question: "Ai là HLV trưởng chính thức tiếp quản chiếc ghế nóng tại Old Trafford từ tháng 11/2024?",
    options: [
      "José Mourinho",
      "Rúben Amorim",
      "Erik ten Hag",
      "Thomas Tuchel"
    ],
    correctIndex: 1,
    explanation: "Chiến lược gia người Bồ Đào Nha Rúben Amorim chính thức ký hợp đồng dẫn dắt Quỷ Đỏ từ tháng 11/2024, mở đầu kỷ nguyên mới cùng ban lãnh đạo INEOS."
  }
];

function initQuiz() {
  state.quizCurrentIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;

  const quizContainer = document.getElementById('quizContainer');
  const quizResultBox = document.getElementById('quizResultBox');
  if (quizContainer) quizContainer.style.display = 'block';
  if (quizResultBox) quizResultBox.style.display = 'none';

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qIndex = state.quizCurrentIndex;
  const total = QUIZ_QUESTIONS.length;
  const qData = QUIZ_QUESTIONS[qIndex];
  if (!qData) return;

  state.quizAnswered = false;

  const numEl = document.getElementById('quizCurrentNum');
  const scoreEl = document.getElementById('quizLiveScore');
  const progressEl = document.getElementById('quizProgressFill');
  const bodyEl = document.getElementById('quizBody');
  const feedbackEl = document.getElementById('quizFeedback');
  const nextBtn = document.getElementById('btnNextQuiz');

  if (numEl) numEl.textContent = qIndex + 1;
  if (scoreEl) scoreEl.textContent = state.quizScore;
  if (progressEl) progressEl.style.width = `${((qIndex + 1) / total) * 100}%`;
  if (feedbackEl) feedbackEl.style.display = 'none';
  if (nextBtn) nextBtn.style.display = 'none';

  const letters = ['A', 'B', 'C', 'D'];
  const optionsHtml = qData.options.map((opt, idx) => `
    <button class="quiz-option-btn" data-opt-idx="${idx}">
      <span class="quiz-option-letter">${letters[idx]}</span>
      <span class="quiz-option-text">${opt}</span>
    </button>
  `).join('');

  if (bodyEl) {
    bodyEl.innerHTML = `
      <div class="quiz-q-title">${qIndex + 1}. ${qData.question}</div>
      <div class="quiz-options">
        ${optionsHtml}
      </div>
    `;

    bodyEl.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        handleQuizAnswer(selectedIdx);
      });
    });
  }
}

function handleQuizAnswer(selectedIdx) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const qIndex = state.quizCurrentIndex;
  const qData = QUIZ_QUESTIONS[qIndex];
  const isCorrect = selectedIdx === qData.correctIndex;

  const optionBtns = document.querySelectorAll('.quiz-option-btn');
  optionBtns.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === qData.correctIndex) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const feedbackEl = document.getElementById('quizFeedback');
  const nextBtn = document.getElementById('btnNextQuiz');
  const scoreEl = document.getElementById('quizLiveScore');

  if (isCorrect) {
    state.quizScore += 10;
    if (scoreEl) scoreEl.textContent = state.quizScore;
    playTone(659.25, 'sine', 0.15); // pleasant chime
    if (feedbackEl) {
      feedbackEl.className = 'quiz-feedback correct';
      feedbackEl.innerHTML = `<strong><i class="fa-solid fa-circle-check"></i> CHÍNH XÁC!</strong> +10 điểm. ${qData.explanation}`;
      feedbackEl.style.display = 'block';
    }
  } else {
    playTone(220, 'sawtooth', 0.2); // low tone
    if (feedbackEl) {
      feedbackEl.className = 'quiz-feedback wrong';
      feedbackEl.innerHTML = `<strong><i class="fa-solid fa-circle-xmark"></i> CHƯA CHÍNH XÁC!</strong> Đáp án đúng là: <strong>${qData.options[qData.correctIndex]}</strong>. ${qData.explanation}`;
      feedbackEl.style.display = 'block';
    }
  }

  if (nextBtn) {
    if (qIndex === QUIZ_QUESTIONS.length - 1) {
      nextBtn.innerHTML = 'Xem Kết Quả <i class="fa-solid fa-trophy"></i>';
    } else {
      nextBtn.innerHTML = 'Câu Tiếp Theo <i class="fa-solid fa-arrow-right"></i>';
    }
    nextBtn.style.display = 'inline-flex';
  }
}

function handleQuizNext() {
  if (state.quizCurrentIndex < QUIZ_QUESTIONS.length - 1) {
    state.quizCurrentIndex++;
    renderQuizQuestion();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  const quizContainer = document.getElementById('quizContainer');
  const quizResultBox = document.getElementById('quizResultBox');
  const finalBadge = document.getElementById('quizFinalScoreBadge');
  const resultTitle = document.getElementById('quizResultTitle');
  const evalText = document.getElementById('quizEvaluationText');

  if (quizContainer) quizContainer.style.display = 'none';
  if (quizResultBox) quizResultBox.style.display = 'block';

  const score = state.quizScore;
  if (finalBadge) finalBadge.textContent = `${score} / 50 ĐIỂM`;

  if (score === 50) {
    if (resultTitle) resultTitle.textContent = 'XUẤT SẮC! BẠN LÀ MANUCIAN ĐÍCH THỰC';
    if (evalText) evalText.textContent = 'Kiến thức về lịch sử MU và các đời HLV của bạn vô cùng uyên bác! Tinh thần Quỷ Đỏ chảy rực lửa trong huyết quản của bạn!';
    launchConfetti();
    playStadiumSound('chant');
  } else if (score >= 30) {
    if (resultTitle) resultTitle.textContent = 'RẤT TỐT! FAN TRUNG THÀNH CỦA QUỶ ĐỎ';
    if (evalText) evalText.textContent = 'Bạn có nền tảng kiến thức rất đáng nể về Manchester United. Hãy tiếp tục tình yêu bất diệt với Nhà hát của những giấc mơ!';
    launchConfetti();
  } else {
    if (resultTitle) resultTitle.textContent = 'CỐ GẮNG LÊN! HÃY TÌM HIỂU THÊM VỀ MU';
    if (evalText) evalText.textContent = 'Lịch sử 147 năm của Man United còn rất nhiều điều kỳ thú đang chờ bạn khám phá. Hãy thử sức lại lần nữa nhé!';
  }
}

function setupHistoryListeners() {
  // History Quick Anchor Navigation Tabs
  document.querySelectorAll('.h-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.h-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetSecId = btn.getAttribute('data-target-sec');
      const targetSec = document.getElementById(targetSecId);
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Timeline era filters
  document.querySelectorAll('.t-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.t-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const era = btn.getAttribute('data-era');
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach(item => {
        if (era === 'all' || item.getAttribute('data-era') === era) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Managers search and filter
  const mgrSearchInput = document.getElementById('mgrSearchInput');
  if (mgrSearchInput) {
    mgrSearchInput.addEventListener('input', (e) => {
      renderManagers(e.target.value, state.currentMgrFilter || 'all');
    });
  }

  document.querySelectorAll('.m-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.m-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-mgr-filter');
      state.currentMgrFilter = filter;
      const q = mgrSearchInput ? mgrSearchInput.value : '';
      renderManagers(q, filter);
    });
  });

  // Quiz next and restart buttons
  const btnNext = document.getElementById('btnNextQuiz');
  if (btnNext) {
    btnNext.addEventListener('click', handleQuizNext);
  }

  const btnRestart = document.getElementById('btnRestartQuiz');
  if (btnRestart) {
    btnRestart.addEventListener('click', initQuiz);
  }
}

// ==================== 14. INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  updateCartBadges();
  setupNavigationListeners();
  setupShopFilters();
  setupCartListeners();
  setupCheckoutListeners();
  setupTrackingListeners();
  setupSizeGuideListeners();
  setupSoundListeners();
  setupHistoryListeners();

  // Render initial views
  renderCatalog();
  renderCartDrawer();

  // Check URL hash for direct links (e.g. #shop, #customizer, #cart, #checkout, #history)
  const hash = window.location.hash.replace('#', '');
  if (['home', 'shop', 'cart', 'checkout', 'tracking', 'history'].includes(hash)) {
    navigateTo(hash);
  } else {
    navigateTo('home');
  }

  // Live order counter increment animation
  const counterEl = document.getElementById('countOrders');
  if (counterEl) {
    let baseOrders = 15480;
    setInterval(() => {
      baseOrders += Math.floor(Math.random() * 2);
      counterEl.textContent = new Intl.NumberFormat('vi-VN').format(baseOrders) + '+';
    }, 12000);
  }
});
