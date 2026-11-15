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
    playerPrice: 520000,
    fanPrice: 450000,
    oldPrice: 650000,
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
    playerPrice: 510000,
    fanPrice: 440000,
    oldPrice: 640000,
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
    playerPrice: 500000,
    fanPrice: 430000,
    oldPrice: 630000,
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
    playerPrice: 550000,
    fanPrice: 550000,
    oldPrice: 690000,
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
    playerPrice: 550000,
    fanPrice: 550000,
    oldPrice: 690000,
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
    playerPrice: 520000,
    fanPrice: 450000,
    oldPrice: 650000,
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
    playerPrice: 540000,
    fanPrice: 540000,
    oldPrice: 680000,
    rating: 4.6,
    reviewsCount: 247,
    badge: 'ANTHEM JACKET',
    image: 'images/anthem-jacket-2024-25-front.png?v=20261115-anthem-jacket',
    imageBack: 'images/anthem-jacket-2024-25-back.png?v=20261115-anthem-jacket',
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
    playerPrice: 480000,
    fanPrice: 480000,
    oldPrice: 600000,
    rating: 4.5,
    reviewsCount: 328,
    badge: 'PRE-MATCH',
    image: 'images/prematch-top-2024-25-front.png?v=20261115-prematch-top',
    imageBack: 'images/prematch-top-2024-25-back.png?v=20261115-prematch-top',
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

function getProductImageById(productId, kitType) {
  const found = PRODUCTS.find(p => p.id === productId);
  if (found && found.image) return found.image;
  const mapByKit = {
    home: 'assets/user-home-authentic.png',
    home_polo: 'assets/user-kit-pair-clean.jpg',
    third: 'assets/user-bruno-third.jpg',
    retro08: 'assets/user-ronaldo-retro.jpg',
    retro99: 'assets/kit-retro-1999-studio.jpg',
    away: 'assets/kit-away-blue.jpg',
    gk: 'assets/kit-gk-green-2425.jpg'
  };
  return mapByKit[kitType] || 'assets/user-home-authentic.png';
}

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
      initMoscowHistoryPage();
      if (window.MotionPrimitives && targetViewEl) window.MotionPrimitives.init(targetViewEl);
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
      fsText.innerHTML = 'Chúc mừng! Đơn hàng của bạn đã đủ điều kiện <strong>FREESHIP TOÀN QUỐC</strong>';
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
      <div style="text-align: center; padding: 50px 20px; color: #4A4640;">
        <i class="fa-solid fa-shirt" style="font-size: 2.5rem; margin-bottom: 12px; opacity: 0.45;"></i>
        <h3>Giỏ hàng của bạn đang trống</h3>
        <p>Hãy tham quan bộ sưu tập áo đấu và đồ cổ vũ chính hãng của CLB.</p>
        <button class="btn btn-primary" style="margin-top: 15px;" data-navigate="shop">
          <i class="fa-solid fa-layer-group"></i> Xem Toàn Bộ Sản Phẩm
        </button>
      </div>
    `;
  } else {
    container.innerHTML = state.cart.map(item => {
      const thumbImg = getProductImageById(item.productId, item.kitType);
      const printRow = item.isMerch
        ? (item.customName ? `<span class="c-print-tag"><i class="fa-solid fa-gift"></i> Lời nhắn: ${item.customName}</span>` : `<span class="c-print-tag">Vật phẩm CĐV chính hãng</span>`)
        : `<span class="c-print-tag"><i class="fa-solid fa-bolt"></i> In tên số: #${item.customNumber} ${item.customName}</span><span>Huy hiệu: ${item.badge}</span>`;
      return `
        <div class="cart-row-item">
          <div class="c-item-prod">
            <div class="c-item-img" style="overflow: hidden; border-radius: 4px;">
              <img src="${thumbImg}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="c-item-details">
              <h5>${item.name}</h5>
              <div class="c-item-meta">
                <span>Phân loại: ${item.version || 'Bản Cầu Thủ'} • Tùy chọn: <strong>${item.size}</strong></span>
                ${printRow}
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
        msgEl.innerHTML = '<span style="color:#15603A; font-weight:600;">✓ Áp dụng mã GLORYMU giảm 10% thành công!</span>';
      }
      showToast('Áp dụng mã GLORYMU thành công (-10%)', 'success');
      playTone(600, 'triangle', 0.15);
    } else if (clean === 'MUFC50K') {
      state.voucherCode = 'MUFC50K';
      state.flatDiscount = 50000;
      state.discountRate = 0;
      if (msgEl) {
        msgEl.innerHTML = '<span style="color:#15603A; font-weight:600;">✓ Áp dụng mã MUFC50K giảm 50.000đ!</span>';
      }
      showToast('Áp dụng mã MUFC50K thành công (-50K)', 'success');
      playTone(600, 'triangle', 0.15);
    } else if (clean === 'FREESHIP') {
      state.voucherCode = 'FREESHIP';
      state.discountRate = 0;
      state.flatDiscount = 0;
      if (msgEl) {
        msgEl.innerHTML = '<span style="color:#15603A; font-weight:600;">✓ Miễn phí vận chuyển toàn quốc!</span>';
      }
      showToast('Miễn phí vận chuyển toàn quốc!', 'success');
    } else {
      if (msgEl) {
        msgEl.innerHTML = '<span style="color:#C8102E; font-weight:600;">✕ Mã không hợp lệ hoặc đã hết lượt. Thử: GLORYMU</span>';
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
  const qrAmountEl = document.getElementById('checkoutQrAmount');

  const { subtotal, discount, shipping, finalTotal } = getCartTotals();

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (countEl) countEl.textContent = totalCount;

  if (itemsContainer) {
    if (state.cart.length === 0) {
      itemsContainer.innerHTML = '<p style="color:#524E48; font-size:0.88rem; font-weight:500;">Giỏ hàng trống.</p>';
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
  if (qrAmountEl) qrAmountEl.textContent = formatVND(finalTotal);

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
  const qrBox = document.getElementById('checkoutQrBox');

  payCards.forEach(input => {
    input.addEventListener('change', (e) => {
      document.querySelectorAll('.pay-method-card').forEach(c => c.classList.remove('active'));
      e.target.closest('.pay-method-card').classList.add('active');

      if (qrBox) {
        if (e.target.value === 'vietqr') {
          qrBox.style.display = 'block';
        } else {
          qrBox.style.display = 'none';
        }
      }
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

  // Phone input update QR content code
  const phoneInput = document.getElementById('chkPhone');
  const qrContentDisplay = document.getElementById('checkoutQrContent');
  if (phoneInput && qrContentDisplay) {
    phoneInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      qrContentDisplay.textContent = val ? `MUFC ${val}` : 'MUFC [SĐT CỦA BẠN]';
    });
  }

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
      <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(42,43,56,0.18); font-size:0.85rem;">
        <div>
          <strong>${item.name} (x${item.quantity})</strong>
          <div style="font-size:0.75rem; color:#565762;">Size: ${item.size} • In áo: #${item.customNumber} ${item.customName}</div>
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

// ==================== 11B. MINI MUSIC PLAYER (CÁCH 3: CHỌN & LƯU NHẠC TỪ MÁY TÍNH) ====================
const MP_DB_NAME = 'MU_Personal_Music_DB';
const MP_STORE_NAME = 'user_tracks';

// Synthesize a playable multi-bar WAV Blob URL for built-in default tracks so <audio> works immediately
function createMelodyWavBlobUrl(notes, tempoBpm = 116) {
  const sampleRate = 22050;
  const beatSec = 60 / tempoBpm;
  let totalSec = 0;
  notes.forEach(n => { totalSec += n.beats * beatSec; });
  const numSamples = Math.max(1, Math.floor(totalSec * sampleRate));
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);

  function writeStr(offset, str) {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  }
  writeStr(0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  writeStr(8, 'WAVE');
  writeStr(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, 'data');
  view.setUint32(40, numSamples * 2, true);

  let cursor = 0;
  notes.forEach(note => {
    const durSamples = Math.floor(note.beats * beatSec * sampleRate);
    const freq = note.f || 0;
    for (let i = 0; i < durSamples && cursor < numSamples; i++, cursor++) {
      let val = 0;
      if (freq > 0) {
        const t = i / sampleRate;
        const env = Math.min(1, i / (sampleRate * 0.015)) * Math.exp(-t * 2.4);
        // Warm organ/brass harmonic blend
        const wave = Math.sin(2 * Math.PI * freq * t) * 0.65
                   + Math.sin(2 * Math.PI * (freq * 2) * t) * 0.22
                   + Math.sin(2 * Math.PI * (freq * 0.5) * t) * 0.18;
        val = wave * env * 0.45;
      }
      const s = Math.max(-1, Math.min(1, val));
      view.setInt16(44 + cursor * 2, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    }
  });

  const blob = new Blob([buffer], { type: 'audio/wav' });
  return URL.createObjectURL(blob);
}

function buildDefaultStadiumTracks() {
  return [
    {
      id: 'default-doibongtoiyeu',
      title: 'Đội Bóng Tôi Yêu — Manchester United',
      artist: 'Doibongtoiyeu.mp4 • Nhạc CLB',
      url: 'assets/Doibongtoiyeu.mp4',
      isUserFile: false
    },
    {
      id: 'default-glory-mp4',
      title: 'Glory Glory Manchester United',
      artist: 'Glory_Glory_Manchester_united.mp4 • Bài hát truyền thống',
      url: 'assets/Glory_Glory_Manchester_united.mp4',
      isUserFile: false
    },
    {
      id: 'default-thank-goat-cr7',
      title: 'Thank Goat CR7 — Cristiano Ronaldo',
      artist: 'Thank_Goat_Cr7.mp4 • Huyền thoại số 7',
      url: 'assets/Thank_Goat_Cr7.mp4',
      isUserFile: false
    }
  ];
}

function openMusicDb() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      resolve(null);
      return;
    }
    const req = indexedDB.open(MP_DB_NAME, 1);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(MP_STORE_NAME)) {
        db.createObjectStore(MP_STORE_NAME, { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
  });
}

async function loadSavedUserTracksFromDb() {
  const db = await openMusicDb();
  if (!db) return [];
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(MP_STORE_NAME, 'readonly');
      const store = tx.objectStore(MP_STORE_NAME);
      const req = store.getAll();
      req.onsuccess = () => {
        const rows = req.result || [];
        const tracks = rows.map(r => ({
          id: r.id,
          title: r.title,
          artist: r.artist || 'Nhạc từ máy của bạn',
          url: URL.createObjectURL(r.blob),
          isUserFile: true
        }));
        resolve(tracks);
      };
      req.onerror = () => resolve([]);
    } catch (e) {
      resolve([]);
    }
  });
}

async function saveUserTrackToDb(trackObj, fileBlob) {
  const db = await openMusicDb();
  if (!db) return;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(MP_STORE_NAME, 'readwrite');
      const store = tx.objectStore(MP_STORE_NAME);
      store.put({
        id: trackObj.id,
        title: trackObj.title,
        artist: trackObj.artist,
        blob: fileBlob,
        createdAt: Date.now()
      });
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    } catch (e) {
      resolve(false);
    }
  });
}

async function deleteUserTrackFromDb(trackId) {
  const db = await openMusicDb();
  if (!db) return;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(MP_STORE_NAME, 'readwrite');
      const store = tx.objectStore(MP_STORE_NAME);
      store.delete(trackId);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    } catch (e) {
      resolve(false);
    }
  });
}

function formatAudioTime(sec) {
  if (!isFinite(sec) || sec < 0) return '00:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function setupSoundListeners() {
  const soundBtn = document.getElementById('soundBtn');
  const popover = document.getElementById('musicPlayerPopover');
  const closeBtn = document.getElementById('mpCloseBtn');
  const playPauseBtn = document.getElementById('mpPlayPauseBtn');
  const playPauseIcon = document.getElementById('mpPlayPauseIcon');
  const prevBtn = document.getElementById('mpPrevBtn');
  const nextBtn = document.getElementById('mpNextBtn');
  const loopBtn = document.getElementById('mpLoopBtn');
  const seekSlider = document.getElementById('mpSeekSlider');
  const curTimeEl = document.getElementById('mpCurrentTime');
  const durTimeEl = document.getElementById('mpTotalDuration');
  const volSlider = document.getElementById('mpVolumeSlider');
  const fileInput = document.getElementById('mpFileInput');
  const playlistEl = document.getElementById('mpPlaylistContainer');
  const playlistCountEl = document.getElementById('mpPlaylistCount');
  const curTitleEl = document.getElementById('mpCurrentTitle');
  const curArtistEl = document.getElementById('mpCurrentArtist');
  const discIcon = document.getElementById('mpDiscIcon');
  const liveDot = document.getElementById('mpLiveDot');

  const audio = new Audio();
  audio.preload = 'metadata';
  audio.volume = 0.85;

  let playlist = buildDefaultStadiumTracks();
  let currentIndex = 0;
  let isPlaying = false;
  let isLoopOne = false;

  function syncPlayerUi() {
    const currentTrack = playlist[currentIndex] || playlist[0];
    if (currentTrack) {
      if (curTitleEl) curTitleEl.textContent = currentTrack.title;
      if (curArtistEl) curArtistEl.textContent = currentTrack.artist;
    }
    if (playPauseIcon) {
      playPauseIcon.className = isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    }
    if (soundBtn) {
      soundBtn.classList.toggle('playing', isPlaying);
    }
    if (discIcon) {
      discIcon.classList.toggle('spinning', isPlaying);
    }
    if (liveDot) {
      liveDot.classList.toggle('active', isPlaying);
    }
    if (playlistCountEl) {
      playlistCountEl.textContent = playlist.length;
    }

    if (playlistEl) {
      playlistEl.innerHTML = playlist.map((tr, idx) => `
        <li class="mp-track-item ${idx === currentIndex ? 'active' : ''}" data-track-idx="${idx}">
          <div class="mp-track-item-left">
            <span class="mp-track-idx">${idx === currentIndex && isPlaying ? '▶' : String(idx + 1).padStart(2, '0')}</span>
            <span class="mp-track-item-name" title="${tr.title}">${tr.title}</span>
          </div>
          <span class="mp-track-badge ${tr.isUserFile ? 'user-file' : ''}">${tr.isUserFile ? 'Nhạc thêm' : 'Đã gắn'}</span>
          <button class="mp-track-del-btn" data-del-id="${tr.id}" title="Xóa bài này" aria-label="Xóa bài hát"><i class="fa-solid fa-trash-can"></i></button>
        </li>
      `).join('');
    }
  }

  function loadTrack(index, autoPlay = false) {
    if (playlist.length === 0) return;
    currentIndex = ((index % playlist.length) + playlist.length) % playlist.length;
    const track = playlist[currentIndex];
    audio.src = track.url;
    audio.load();
    syncPlayerUi();
    if (autoPlay) {
      audio.play().then(() => {
        isPlaying = true;
        syncPlayerUi();
      }).catch(() => {
        isPlaying = false;
        syncPlayerUi();
      });
    }
  }

  function togglePlayPause() {
    if (!audio.src && playlist.length > 0) {
      loadTrack(currentIndex, true);
      return;
    }
    if (audio.paused) {
      audio.play().then(() => {
        isPlaying = true;
        syncPlayerUi();
      }).catch(() => {});
    } else {
      audio.pause();
      isPlaying = false;
      syncPlayerUi();
    }
  }

  // Load saved user tracks from IndexedDB on startup
  loadSavedUserTracksFromDb().then(savedTracks => {
    if (savedTracks.length > 0) {
      playlist = [...savedTracks, ...playlist];
      currentIndex = 0;
    }
    loadTrack(0, false);
  });

  // Toggle Mini Player Popover when clicking #soundBtn (and auto-play Track #1 if paused on first click)
  let firstOpenAutoPlayed = false;
  if (soundBtn && popover) {
    soundBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !popover.classList.contains('open');
      popover.classList.toggle('open', willOpen);
      soundBtn.setAttribute('aria-expanded', String(willOpen));
      if (willOpen && !firstOpenAutoPlayed && audio.paused) {
        firstOpenAutoPlayed = true;
        togglePlayPause();
      }
    });
  }

  // Handle adding a song by URL / file path (#mpUrlInput & #mpAddUrlBtn)
  const urlInput = document.getElementById('mpUrlInput');
  const addUrlBtn = document.getElementById('mpAddUrlBtn');
  if (urlInput && addUrlBtn) {
    const handleAddUrl = () => {
      const rawUrl = urlInput.value.trim();
      if (!rawUrl) {
        showToast('Vui lòng dán đường link hoặc đường dẫn file nhạc (.mp3 / .mp4)', 'error');
        return;
      }
      const cleanName = rawUrl.split('/').pop().split('?')[0].replace(/\.[^/.]+$/, '') || 'Bài nhạc từ Link';
      const newTrack = {
        id: 'user-url-' + Date.now(),
        title: decodeURIComponent(cleanName),
        artist: 'Link nhạc đã thêm',
        url: rawUrl,
        isUserFile: true
      };
      playlist = [newTrack, ...playlist];
      loadTrack(0, true);
      urlInput.value = '';
      showToast(`🎵 Đã thêm và phát "${newTrack.title}"!`, 'success');
    };
    addUrlBtn.addEventListener('click', handleAddUrl);
    urlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAddUrl();
      }
    });
  }

  if (closeBtn && popover) {
    closeBtn.addEventListener('click', () => {
      popover.classList.remove('open');
      if (soundBtn) soundBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // Close popover when clicking outside
  document.addEventListener('click', (e) => {
    if (popover && popover.classList.contains('open')) {
      const wrap = document.getElementById('soundPlayerWrap');
      if (wrap && !wrap.contains(e.target)) {
        popover.classList.remove('open');
        if (soundBtn) soundBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', togglePlayPause);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => loadTrack(currentIndex - 1, true));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => loadTrack(currentIndex + 1, true));
  }

  if (loopBtn) {
    loopBtn.addEventListener('click', () => {
      isLoopOne = !isLoopOne;
      audio.loop = isLoopOne;
      loopBtn.classList.toggle('active', isLoopOne);
      showToast(isLoopOne ? '🔁 Đã bật lặp lại 1 bài hiện tại' : '▶️ Tự động chuyển bài tiếp theo trong danh sách', 'info');
    });
  }

  if (volSlider) {
    volSlider.addEventListener('input', (e) => {
      audio.volume = parseFloat(e.target.value);
    });
  }

  if (seekSlider) {
    seekSlider.addEventListener('input', (e) => {
      if (audio.duration && isFinite(audio.duration)) {
        audio.currentTime = (parseFloat(e.target.value) / 100) * audio.duration;
      }
    });
  }

  audio.addEventListener('timeupdate', () => {
    if (curTimeEl) curTimeEl.textContent = formatAudioTime(audio.currentTime);
    if (durTimeEl && isFinite(audio.duration)) durTimeEl.textContent = formatAudioTime(audio.duration);
    if (seekSlider && audio.duration && isFinite(audio.duration)) {
      seekSlider.value = ((audio.currentTime / audio.duration) * 100).toFixed(1);
    }
  });

  audio.addEventListener('loadedmetadata', () => {
    if (durTimeEl && isFinite(audio.duration)) {
      durTimeEl.textContent = formatAudioTime(audio.duration);
    }
  });

  audio.addEventListener('ended', () => {
    if (!isLoopOne) {
      loadTrack(currentIndex + 1, true);
    }
  });

  // Handle selecting custom MP3 / WAV / M4A files from the user's computer
  if (fileInput) {
    fileInput.addEventListener('change', async (e) => {
      const files = Array.from(e.target.files || []);
      if (files.length === 0) return;

      const addedTracks = [];
      for (const file of files) {
        const cleanTitle = file.name.replace(/\.[^/.]+$/, '');
        const newTrack = {
          id: 'user-song-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
          title: cleanTitle,
          artist: 'Nhạc từ máy tính của bạn',
          url: URL.createObjectURL(file),
          isUserFile: true
        };
        await saveUserTrackToDb(newTrack, file);
        addedTracks.push(newTrack);
      }

      // Put newly added songs at the top of the playlist and play immediately!
      playlist = [...addedTracks, ...playlist];
      loadTrack(0, true);
      showToast(`🎵 Đã thêm và phát "${addedTracks[0].title}" (${addedTracks.length} bài)!`, 'success');
      fileInput.value = '';
    });
  }

  // Click on playlist item to play or delete button to remove
  if (playlistEl) {
    playlistEl.addEventListener('click', async (e) => {
      const delBtn = e.target.closest('.mp-track-del-btn');
      if (delBtn) {
        e.stopPropagation();
        const delId = delBtn.getAttribute('data-del-id');
        await deleteUserTrackFromDb(delId);
        const delIdx = playlist.findIndex(t => t.id === delId);
        if (delIdx !== -1) {
          playlist.splice(delIdx, 1);
          if (currentIndex >= playlist.length) currentIndex = 0;
          loadTrack(currentIndex, isPlaying);
          showToast('Đã xóa bài hát khỏi danh sách lưu', 'info');
        }
        return;
      }

      const itemEl = e.target.closest('.mp-track-item');
      if (itemEl) {
        const idx = parseInt(itemEl.getAttribute('data-track-idx'), 10);
        if (!isNaN(idx)) {
          loadTrack(idx, true);
        }
      }
    });
  }

  // Keep stadium sound pill buttons working if present
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

// ==================== 13B. LỊCH SỬ CLB (MOSCOW 2008 SCROLLYTELLING, 25 MANAGERS & QUIZ) ====================
const MU_MANAGERS_DATA = [
  { id: 1, name: 'A. H. Albut', years: '1892 – 1900', era: 'classic', matches: 350, winRate: '44.5%', trophies: 'Nền móng Newton Heath', desc: 'Thư ký điều hành đầu tiên tổ chức chuyên nghiệp hóa đội bóng đường sắt Newton Heath.' },
  { id: 2, name: 'James West', years: '1900 – 1903', era: 'classic', matches: 113, winRate: '40.7%', trophies: 'Đổi tên thành Manchester United (1902)', desc: 'Chứng kiến cột mốc lịch sử ngày 24/4/1902 khi CLB chính thức mang tên Manchester United.' },
  { id: 3, name: 'Ernest Mangnall', years: '1903 – 1912', era: 'legend', matches: 373, winRate: '54.1%', trophies: '2 First Division (1908, 1911), 1 FA Cup (1909), 2 Charity Shield', desc: 'Mang về chức vô địch nước Anh đầu tiên và đưa CLB chuyển tới thánh địa Old Trafford năm 1910.' },
  { id: 4, name: 'John Bentley', years: '1912 – 1914', era: 'classic', matches: 82, winRate: '36.6%', trophies: 'Trụ hạng First Division', desc: 'Dẫn dắt CLB trong giai đoạn chuyển giao trước thềm Thế chiến thứ nhất.' },
  { id: 5, name: 'Jack Robson', years: '1914 – 1921', era: 'classic', matches: 139, winRate: '29.5%', trophies: 'Tái thiết sau Thế chiến I', desc: 'Vị HLV trưởng đầu tiên đúng nghĩa trên băng ghế chỉ đạo của Quỷ Đỏ.' },
  { id: 6, name: 'John Chapman', years: '1921 – 1926', era: 'classic', matches: 221, winRate: '38.9%', trophies: 'Bán kết FA Cup 1926', desc: 'Đưa đội bóng trở lại hạng đấu cao nhất nước Anh năm 1925.' },
  { id: 7, name: 'Lal Hilditch', years: '1926 – 1927', era: 'classic', matches: 33, winRate: '30.3%', trophies: 'Cầu thủ kiêm HLV', desc: 'Đảm nhận vai trò cầu thủ kiêm huấn luyện viên trưởng tạm quyền.' },
  { id: 8, name: 'Herbert Bamlett', years: '1927 – 1931', era: 'classic', matches: 183, winRate: '31.1%', trophies: 'Giai đoạn Đại Suy Thoái', desc: 'Chèo lái CLB vượt qua thời kỳ khủng hoảng kinh tế cuối thập niên 1920.' },
  { id: 9, name: 'Walter Crickmer', years: '1931 – 1932 & 1937 – 1945', era: 'classic', matches: 152, winRate: '42.1%', trophies: 'Đồng sáng lập Học viện trẻ MU (1937)', desc: 'Khởi xướng truyền thống sử dụng cầu thủ tự đào tạo kéo dài hơn 85 năm qua.' },
  { id: 10, name: 'Scott Duncan', years: '1932 – 1937', era: 'classic', matches: 235, winRate: '39.1%', trophies: 'Vô địch Second Division (1936)', desc: 'Đưa Manchester United giành chức vô địch hạng Nhì năm 1936 để thăng hạng.' },
  { id: 11, name: 'Sir Matt Busby', years: '1945 – 1969 & 1970 – 1971', era: 'legend', matches: 1141, winRate: '50.5%', trophies: '1 Cúp C1 (1968), 5 First Division, 2 FA Cup, 5 Charity Shield', desc: 'Cha đẻ của thế hệ "Busby Babes", tái thiết CLB từ thảm họa Munich 1958 và đưa MU lên đỉnh châu Âu tại Wembley 1968.' },
  { id: 12, name: 'Jimmy Murphy', years: '1958 (Tạm quyền)', era: 'legend', matches: 22, winRate: '50.0%', trophies: 'Á quân FA Cup 1958', desc: 'Người giữ ngọn lửa Old Trafford không tắt sau thảm họa Munich khi Sir Matt Busby đang điều trị trong bệnh viện.' },
  { id: 13, name: 'Wilf McGuinness', years: '1969 – 1970', era: 'classic', matches: 87, winRate: '36.8%', trophies: '3 lần Bán kết Cúp Quốc Nội', desc: 'Cựu cầu thủ Busby Babes tiếp quản ghế nóng ở tuổi 31.' },
  { id: 14, name: 'Frank O\'Farrell', years: '1971 – 1972', era: 'classic', matches: 81, winRate: '37.0%', trophies: 'Chiêu mộ Martin Buchan', desc: 'Đặt viên gạch đầu tiên cho hàng thủ thập niên 1970 với bản hợp đồng đội trưởng Martin Buchan.' },
  { id: 15, name: 'Tommy Docherty', years: '1972 – 1977', era: 'classic', matches: 228, winRate: '46.9%', trophies: '1 FA Cup (1977), Second Division (1975)', desc: 'Xây dựng lối chơi tấn công biên rực lửa và đánh bại Liverpool 2-1 tại chung kết FA Cup 1977.' },
  { id: 16, name: 'Dave Sexton', years: '1977 – 1981', era: 'classic', matches: 201, winRate: '40.3%', trophies: '1 Charity Shield (1977), Á quân Anh 1980', desc: 'Nhà chiến thuật điềm tĩnh đưa MU cán đích ngôi Á quân First Division mùa 1979/80.' },
  { id: 17, name: 'Ron Atkinson', years: '1981 – 1986', era: 'classic', matches: 292, winRate: '50.0%', trophies: '2 FA Cup (1983, 1985), 1 Charity Shield', desc: 'Chiêu mộ đội trưởng "Captain Marvel" Bryan Robson và mang về 2 chiếc Cúp FA đầy cảm xúc.' },
  { id: 18, name: 'Sir Alex Ferguson', years: '1986 – 2013', era: 'legend', matches: 1500, winRate: '59.7%', trophies: '38 Danh hiệu: 13 Premier League, 2 Champions League (1999, 2008), 5 FA Cup', desc: 'Kiến trúc sư vĩ đại nhất lịch sử bóng đá thế giới — tác giả Cú Ăn Ba 1999 và Đế Chế Đỏ Moscow 2008.' },
  { id: 19, name: 'David Moyes', years: '2013 – 2014', era: 'post-saf', matches: 51, winRate: '52.9%', trophies: '1 FA Community Shield (2013)', desc: 'Người kế nhiệm đầu tiên sau khi Sir Alex Ferguson nghỉ hưu mùa hè 2013.' },
  { id: 20, name: 'Ryan Giggs', years: '2014 (Tạm quyền)', era: 'post-saf', matches: 4, winRate: '50.0%', trophies: 'Cầu thủ giàu thành tích nhất CLB', desc: 'Huyền thoại 963 trận khoác áo Quỷ Đỏ đảm nhận vai trò HLV kiêm cầu thủ cuối mùa 2013/14.' },
  { id: 21, name: 'Louis van Gaal', years: '2014 – 2016', era: 'post-saf', matches: 103, winRate: '52.4%', trophies: '1 FA Cup (2016)', desc: 'Mang về chức vô địch FA Cup 2016 tại Wembley và trao cơ hội ra mắt cho Marcus Rashford.' },
  { id: 22, name: 'José Mourinho', years: '2016 – 2018', era: 'post-saf', matches: 144, winRate: '58.3%', trophies: '1 UEFA Europa League (2017), 1 League Cup (2017), 1 Community Shield', desc: 'Hoàn tất bộ sưu tập cúp châu Âu của CLB với chiến thắng 2-0 tại chung kết Europa League ở Stockholm.' },
  { id: 23, name: 'Ole Gunnar Solskjær', years: '2018 – 2021', era: 'post-saf', matches: 168, winRate: '54.2%', trophies: 'Á quân Premier League (2021) & Europa League (2021)', desc: 'Người hùng 1999 tái khơi dậy bản sắc phản công tốc độ và đêm ngược dòng lịch sử tại Paris.' },
  { id: 24, name: 'Erik ten Hag', years: '2022 – 2024', era: 'post-saf', matches: 128, winRate: '54.7%', trophies: '1 FA Cup (2024), 1 Carabao Cup (2023)', desc: 'Giành 2 danh hiệu quốc nội trong 2 mùa liên tiếp, đỉnh cao là chiến thắng 2-1 trước Man City tại chung kết FA Cup 2024.' },
  { id: 25, name: 'Rúben Amorim', years: '2024 – Hiện Tại', era: 'current', matches: 24, winRate: '54.2%', trophies: 'Kỷ nguyên chiến thuật 3-4-2-1 hiện đại', desc: 'Thuyền trưởng trẻ tuổi người Bồ Đào Nha mở ra chương tái thiết toàn diện tại Old Trafford.' }
];

const MU_QUIZ_QUESTIONS = [
  {
    q: 'Trong trận chung kết UEFA Champions League ngày 21/05/2008 dưới cơn mưa Moscow, ai là người ghi bàn mở tỷ số bằng pha bật cao đánh đầu ở phút 26 cho Manchester United?',
    options: ['Wayne Rooney', 'Cristiano Ronaldo', 'Carlos Tevez', 'Paul Scholes'],
    answer: 1,
    explain: 'Phút 26 tại SVĐ Luzhniki, từ quả tạt của Wes Brown, Cristiano Ronaldo bật cao đánh đầu mở tỷ số 1-0 cho Quỷ Đỏ.'
  },
  {
    q: 'Bộ ba tấn công nguyên tử Ronaldo – Rooney – Tevez đã ghi tổng cộng bao nhiêu bàn thắng trên mọi đấu trường trong mùa giải 2007/2008?',
    options: ['65 bàn thắng', '72 bàn thắng', '79 bàn thắng', '84 bàn thắng'],
    answer: 2,
    explain: 'Bộ ba Ronaldo (42 bàn), Tevez (19 bàn) và Rooney (18 bàn) tạo thành họng pháo 79 bàn thắng đưa MU giành cú đúp Premier League & Champions League.'
  },
  {
    q: 'Ở loạt sút luân lưu thứ 7 trận chung kết C1 năm 2008, thủ môn Edwin van der Sar đã cản phá cú sút của cầu thủ nào bên phía Chelsea?',
    options: ['Frank Lampard', 'Michael Ballack', 'Salomon Kalou', 'Nicolas Anelka'],
    answer: 3,
    explain: 'Edwin van der Sar chỉ tay về góc trái rồi bay người sang phải cản phá cú sút của Nicolas Anelka, ấn định chiến thắng luân lưu 6-5.'
  },
  {
    q: 'Ai là tác giả bàn thắng sút xa sấm sét vào lưới Barcelona ở bán kết lượt về tại Old Trafford, đưa MU tiến thẳng tới chung kết Moscow 2008?',
    options: ['Paul Scholes', 'Michael Carrick', 'Owen Hargreaves', 'Ryan Giggs'],
    answer: 0,
    explain: 'Phút 14 trận bán kết lượt về tại Old Trafford (29/04/2008), Paul Scholes tung cú sút xa 25m cháy lưới Barcelona.'
  },
  {
    q: 'Hàng phòng ngự thép Ferdinand – Vidić – Van der Sar chỉ để thủng lưới bao nhiêu bàn sau 38 vòng đấu Ngoại hạng Anh mùa giải 2007/2008?',
    options: ['18 bàn thua', '22 bàn thua', '27 bàn thua', '30 bàn thua'],
    answer: 1,
    explain: 'Manchester United chỉ để lọt lưới 22 bàn sau 38 vòng Ngoại hạng Anh 2007/08 và giành chức vô địch với 87 điểm.'
  }
];

let moscowRainAnimId = null;
let quizState = { currentIdx: 0, score: 0, answered: false };

function startMoscowRainAnimation() {
  const canvas = document.getElementById('moscowRainCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resizeRain() {
    const parent = canvas.parentElement;
    canvas.width = parent ? parent.clientWidth : window.innerWidth;
    canvas.height = parent ? parent.clientHeight : 640;
  }
  resizeRain();

  if (moscowRainAnimId) {
    cancelAnimationFrame(moscowRainAnimId);
  }

  const drops = Array.from({ length: 115 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    len: Math.random() * 22 + 12,
    speed: Math.random() * 9 + 11,
    drift: -1.8,
    alpha: Math.random() * 0.35 + 0.12
  }));

  function drawRain() {
    if (state.currentView !== 'history') return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 1.15;
    ctx.lineCap = 'round';

    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];
      ctx.strokeStyle = `rgba(235, 242, 255, ${d.alpha})`;
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x + d.drift * 2.2, d.y + d.len);
      ctx.stroke();

      d.x += d.drift;
      d.y += d.speed;

      if (d.y > canvas.height) {
        d.y = -25;
        d.x = Math.random() * (canvas.width + 120);
      }
    }
    moscowRainAnimId = requestAnimationFrame(drawRain);
  }

  drawRain();
}

function renderManagers(filterEra = 'all', searchQuery = '') {
  const container = document.getElementById('managersGridContainer');
  if (!container) return;

  const q = searchQuery.trim().toLowerCase();
  const filtered = MU_MANAGERS_DATA.filter(m => {
    const matchEra = filterEra === 'all' || m.era === filterEra;
    const matchQ = !q || m.name.toLowerCase().includes(q) || m.trophies.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q);
    return matchEra && matchQ;
  });

  container.innerHTML = filtered.map(m => `
    <article class="manager-card ${m.era === 'legend' ? 'mgr-legend' : ''}">
      <div class="mgr-card-top">
        <span class="mgr-order">#${String(m.id).padStart(2, '0')}</span>
        <span class="mgr-years">${m.years}</span>
      </div>
      <h3 class="mgr-name">${m.name}</h3>
      <div class="mgr-trophy-pill"><i class="fa-solid fa-trophy"></i> ${m.trophies}</div>
      <p class="mgr-desc">${m.desc}</p>
      <div class="mgr-stats-row">
        <div><span>Số trận:</span> <strong>${m.matches}</strong></div>
        <div><span>Tỷ lệ thắng:</span> <strong>${m.winRate}</strong></div>
      </div>
    </article>
  `).join('');
}

function renderQuizQuestion() {
  const bodyEl = document.getElementById('quizBody');
  const numEl = document.getElementById('quizCurrentNum');
  const scoreEl = document.getElementById('quizLiveScore');
  const fillEl = document.getElementById('quizProgressFill');
  const feedbackEl = document.getElementById('quizFeedback');
  const nextBtn = document.getElementById('btnNextQuiz');
  const quizContainer = document.getElementById('quizContainer');
  const resultBox = document.getElementById('quizResultBox');

  if (!bodyEl) return;

  if (quizState.currentIdx >= MU_QUIZ_QUESTIONS.length) {
    if (quizContainer) quizContainer.style.display = 'none';
    if (resultBox) {
      resultBox.style.display = 'block';
      const badge = document.getElementById('quizFinalScoreBadge');
      if (badge) badge.textContent = `${quizState.score} / 50 ĐIỂM`;
    }
    return;
  }

  if (quizContainer) quizContainer.style.display = 'block';
  if (resultBox) resultBox.style.display = 'none';

  const item = MU_QUIZ_QUESTIONS[quizState.currentIdx];
  quizState.answered = false;

  if (numEl) numEl.textContent = quizState.currentIdx + 1;
  if (scoreEl) scoreEl.textContent = quizState.score;
  if (fillEl) fillEl.style.width = `${((quizState.currentIdx + 1) / MU_QUIZ_QUESTIONS.length) * 100}%`;
  if (feedbackEl) feedbackEl.style.display = 'none';
  if (nextBtn) nextBtn.style.display = 'none';

  bodyEl.innerHTML = `
    <h4 class="quiz-question-title">${item.q}</h4>
    <div class="quiz-options-grid">
      ${item.options.map((opt, idx) => `
        <button class="quiz-opt-btn" data-opt-idx="${idx}">
          <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
          <span class="opt-label">${opt}</span>
        </button>
      `).join('')}
    </div>
  `;

  bodyEl.querySelectorAll('.quiz-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (quizState.answered) return;
      quizState.answered = true;
      const chosen = parseInt(btn.getAttribute('data-opt-idx'));
      const allBtns = bodyEl.querySelectorAll('.quiz-opt-btn');

      allBtns.forEach((b, i) => {
        if (i === item.answer) b.classList.add('correct');
        else if (i === chosen) b.classList.add('wrong');
      });

      if (chosen === item.answer) {
        quizState.score += 10;
        if (scoreEl) scoreEl.textContent = quizState.score;
        if (feedbackEl) {
          feedbackEl.style.display = 'block';
          feedbackEl.className = 'quiz-feedback feedback-ok';
          feedbackEl.innerHTML = `<strong>Chính xác (+10 điểm)!</strong> ${item.explain}`;
        }
      } else {
        if (feedbackEl) {
          feedbackEl.style.display = 'block';
          feedbackEl.className = 'quiz-feedback feedback-err';
          feedbackEl.innerHTML = `<strong>Chưa chính xác!</strong> ${item.explain}`;
        }
      }

      if (nextBtn) nextBtn.style.display = 'inline-flex';
    });
  });
}

let moscowListenersInitialized = false;
function initMoscowHistoryPage() {
  startMoscowRainAnimation();
  renderManagers();
  renderQuizQuestion();

  // Trigger color reveal on scroll for Scene 2 archival cards
  if ('IntersectionObserver' in window) {
    const colorObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('color-revealed');
        }
      });
    }, { threshold: 0.35 });
    document.querySelectorAll('.color-reveal-card').forEach(el => colorObserver.observe(el));
  }

  if (moscowListenersInitialized) return;
  moscowListenersInitialized = true;

  // Chapter navigation buttons inside #viewHistory
  document.querySelectorAll('#viewHistory .h-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#viewHistory .h-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const secId = btn.getAttribute('data-target-sec');
      const secEl = document.getElementById(secId);
      if (secEl) secEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Smooth scroll buttons on Moscow Hero & Ending CTA
  const btnScrollScene2 = document.getElementById('btnScrollMoscowScene2');
  if (btnScrollScene2) {
    btnScrollScene2.addEventListener('click', (e) => {
      e.preventDefault();
      const s2 = document.getElementById('moscowScene2');
      if (s2) s2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  const btnScrollScene1 = document.getElementById('btnScrollMoscowScene1');
  if (btnScrollScene1) {
    btnScrollScene1.addEventListener('click', (e) => {
      e.preventDefault();
      const s1 = document.getElementById('moscowScene1');
      if (s1) s1.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Luzhniki Horizontal Film Strip Prev/Next Controls
  const strip = document.getElementById('luzhnikiFilmStrip');
  const prevBtn = document.getElementById('btnLuzhnikiPrev');
  const nextBtn = document.getElementById('btnLuzhnikiNext');
  if (strip && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      strip.scrollBy({ left: -460, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      strip.scrollBy({ left: 460, behavior: 'smooth' });
    });
  }

  // Manager search & filter pills
  const mgrInput = document.getElementById('mgrSearchInput');
  let activeMgrEra = 'all';
  if (mgrInput) {
    mgrInput.addEventListener('input', (e) => {
      renderManagers(activeMgrEra, e.target.value);
    });
  }
  document.querySelectorAll('#mgrFilterPills .m-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#mgrFilterPills .m-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeMgrEra = pill.getAttribute('data-mgr-filter');
      renderManagers(activeMgrEra, mgrInput ? mgrInput.value : '');
    });
  });

  // Quiz next & restart buttons
  const nextQuizBtn = document.getElementById('btnNextQuiz');
  if (nextQuizBtn) {
    nextQuizBtn.addEventListener('click', () => {
      quizState.currentIdx++;
      renderQuizQuestion();
    });
  }
  const restartQuizBtn = document.getElementById('btnRestartQuiz');
  if (restartQuizBtn) {
    restartQuizBtn.addEventListener('click', () => {
      quizState = { currentIdx: 0, score: 0, answered: false };
      renderQuizQuestion();
    });
  }
}

// ==================== 13C. CHECKOUT MINI-GAMES & VOUCHER REWARDS ====================
state.unlockedPerks = state.unlockedPerks || [];
state.hasFreeShipPerk = state.hasFreeShipPerk || false;
state.fanCardTier = state.fanCardTier || null;

// Upgraded Cart Totals supporting Quiz Vouchers (70%, 85%, 100% FREE) & Penalty 2008 Rewards
function getCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let discount = 0;
  if (state.discountRate > 0) {
    discount += Math.round(subtotal * state.discountRate);
  }
  if (state.flatDiscount > 0) {
    discount += state.flatDiscount;
  }
  discount = Math.min(subtotal, discount);

  const isFreeShip =
    subtotal >= state.freeShippingThreshold ||
    ['FREESHIP', 'VIPFAN85', 'GOAT100', 'MOSCOW08'].includes(state.voucherCode) ||
    state.hasFreeShipPerk === true;
  const shipping = subtotal > 0 ? (isFreeShip ? 0 : state.shippingFee) : 0;
  const finalTotal = Math.max(0, subtotal - discount + shipping);

  return { subtotal, discount, shipping, finalTotal, isFreeShip };
}

function setupVoucherListeners() {
  const addUniquePerk = (perkText) => {
    if (!state.unlockedPerks) state.unlockedPerks = [];
    if (!state.unlockedPerks.includes(perkText)) {
      state.unlockedPerks.push(perkText);
    }
  };

  const applyVoucherLogic = (code, msgEl) => {
    const clean = (code || '').toUpperCase().trim();
    if (!clean) return;

    if (clean === 'GOAT100') {
      state.voucherCode = 'GOAT100';
      state.discountRate = 1.0; // 100% FREE ALL JERSEYS
      state.flatDiscount = 0;
      state.hasFreeShipPerk = true;
      state.fanCardTier = 'LEGEND 10/10';
      addUniquePerk('MUA FREE 100% TẤT CẢ CÁC LOẠI ÁO ĐẤU (Kỷ lục Quiz 10/10)');
      addUniquePerk('Thẻ Fan Cứng MU Hạng Huyền Thoại (Legend Edition) + Miễn phí Ship Hỏa tốc');
      if (msgEl) {
        msgEl.innerHTML = '<span style="color:#15603A; font-weight:700;">★ Đỉnh cao 10/10! Đã kích hoạt mã GOAT100: MUA FREE 100% TẤT CẢ ÁO ĐẤU!</span>';
      }
      showToast('Chúc mừng! Kích hoạt GOAT100 — Mua FREE 100% tất cả áo đấu!', 'success');
      playTone(880, 'triangle', 0.25);
    } else if (clean === 'VIPFAN85') {
      state.voucherCode = 'VIPFAN85';
      state.discountRate = 0.85; // 85% OFF
      state.flatDiscount = 0;
      state.hasFreeShipPerk = true;
      state.fanCardTier = 'VIP FAN CỨNG';
      addUniquePerk('Thẻ Fan Cứng MU Chính Thức (Red Devils VIP Member Card)');
      addUniquePerk('Voucher Giảm 85% + Tặng Khăn Quàng Cổ Stretford End & Huy Hiệu Moscow 2008');
      if (msgEl) {
        msgEl.innerHTML = '<span style="color:#15603A; font-weight:700;">★ Đã kích hoạt VIPFAN85: Giảm 85% + Tặng Thẻ Fan Cứng MU & Bộ Quà Tặng!</span>';
      }
      showToast('Kích hoạt VIPFAN85 (-85% + Thẻ Fan Cứng MU & Quà tặng)!', 'success');
      playTone(760, 'triangle', 0.22);
    } else if (clean === 'MUFAN70') {
      state.voucherCode = 'MUFAN70';
      state.discountRate = 0.70; // 70% OFF
      state.flatDiscount = 0;
      addUniquePerk('Voucher Giảm Giá 70% (Vượt qua 7/10 câu hỏi Trắc nghiệm MU)');
      if (msgEl) {
        msgEl.innerHTML = '<span style="color:#15603A; font-weight:700;">✓ Đã kích hoạt mã MUFAN70: Giảm ngay 70% tổng giá trị đơn hàng!</span>';
      }
      showToast('Áp dụng mã MUFAN70 thành công (-70%)!', 'success');
      playTone(680, 'triangle', 0.2);
    } else if (clean === 'MOSCOW08') {
      if (state.discountRate < 0.50) {
        state.voucherCode = 'MOSCOW08';
        state.discountRate = 0.50;
      }
      state.flatDiscount = 0;
      state.hasFreeShipPerk = true;
      addUniquePerk('Nhà Vô Địch Penalty Moscow 2008: Giảm 50% + Free Ship Hỏa Tốc + Huy Hiệu C1 2008');
      if (msgEl) {
        const activeRateText = Math.round(state.discountRate * 100) + '%';
        msgEl.innerHTML = `<span style="color:#15603A; font-weight:700;">🏆 Chiến thắng Penalty Moscow 2008! Ưu đãi giảm ${activeRateText} + Free Ship & Quà C1!</span>`;
      }
      showToast('Kích hoạt phần thưởng Vô Địch Penalty Moscow 2008!', 'success');
      playTone(720, 'triangle', 0.2);
    } else if (clean === 'GLORYMU') {
      state.voucherCode = 'GLORYMU';
      state.discountRate = 0.1;
      state.flatDiscount = 0;
      if (msgEl) {
        msgEl.innerHTML = '<span style="color:#15603A; font-weight:600;">✓ Áp dụng mã GLORYMU giảm 10% thành công!</span>';
      }
      showToast('Áp dụng mã GLORYMU thành công (-10%)', 'success');
      playTone(600, 'triangle', 0.15);
    } else if (clean === 'MUFC50K') {
      state.voucherCode = 'MUFC50K';
      state.flatDiscount = 50000;
      state.discountRate = 0;
      if (msgEl) {
        msgEl.innerHTML = '<span style="color:#15603A; font-weight:600;">✓ Áp dụng mã MUFC50K giảm 50.000đ!</span>';
      }
      showToast('Áp dụng mã MUFC50K thành công (-50K)', 'success');
      playTone(600, 'triangle', 0.15);
    } else if (clean === 'FREESHIP') {
      state.voucherCode = 'FREESHIP';
      state.discountRate = 0;
      state.flatDiscount = 0;
      state.hasFreeShipPerk = true;
      if (msgEl) {
        msgEl.innerHTML = '<span style="color:#15603A; font-weight:600;">✓ Miễn phí vận chuyển toàn quốc!</span>';
      }
      showToast('Miễn phí vận chuyển toàn quốc!', 'success');
    } else {
      if (msgEl) {
        msgEl.innerHTML = '<span style="color:#C8102E; font-weight:600;">✕ Mã không hợp lệ. Hãy bấm nút "Lấy Voucher" để chơi Quiz nhận mã 70%–100%!</span>';
      }
      showToast('Mã voucher không hợp lệ', 'error');
    }

    ['voucherInput', 'cartPageVoucherInput', 'chkVoucherInput'].forEach(id => {
      const el = document.getElementById(id);
      if (el && state.voucherCode) el.value = state.voucherCode;
    });

    renderCartDrawer();
    if (state.currentView === 'cart') renderFullCartPage();
    if (state.currentView === 'checkout') renderCheckoutView();
  };

  window.applyMURewardVoucher = (code) => {
    const chkMsg = document.getElementById('chkVoucherMsg');
    applyVoucherLogic(code, chkMsg);
  };

  const btnDrawerVoucher = document.getElementById('btnApplyVoucher');
  const inputDrawerVoucher = document.getElementById('voucherInput');
  const msgDrawerVoucher = document.getElementById('voucherMsg');
  if (btnDrawerVoucher && inputDrawerVoucher) {
    btnDrawerVoucher.onclick = () => applyVoucherLogic(inputDrawerVoucher.value, msgDrawerVoucher);
  }

  const btnPageVoucher = document.getElementById('btnCartPageApplyVoucher');
  const inputPageVoucher = document.getElementById('cartPageVoucherInput');
  const msgPageVoucher = document.getElementById('cartPageVoucherMsg');
  if (btnPageVoucher && inputPageVoucher) {
    btnPageVoucher.onclick = () => applyVoucherLogic(inputPageVoucher.value, msgPageVoucher);
  }

  const btnChkVoucher = document.getElementById('btnChkApplyVoucher');
  const inputChkVoucher = document.getElementById('chkVoucherInput');
  const msgChkVoucher = document.getElementById('chkVoucherMsg');
  if (btnChkVoucher && inputChkVoucher) {
    btnChkVoucher.onclick = () => applyVoucherLogic(inputChkVoucher.value, msgChkVoucher);
  }

  document.querySelectorAll('.coupon-chip').forEach(chip => {
    chip.onclick = () => {
      const code = chip.getAttribute('data-coupon');
      if (inputPageVoucher) inputPageVoucher.value = code;
      applyVoucherLogic(code, msgPageVoucher);
    };
  });
}

function renderCheckoutView() {
  const itemsContainer = document.getElementById('checkoutItemsList');
  const countEl = document.getElementById('chkItemsCount');
  const subEl = document.getElementById('chkSubtotal');
  const shipEl = document.getElementById('chkShipping');
  const totalEl = document.getElementById('chkFinalTotal');
  const discRow = document.getElementById('chkDiscountRow');
  const discEl = document.getElementById('chkDiscountAmount');
  const qrAmountEl = document.getElementById('checkoutQrAmount');
  const chkVoucherInput = document.getElementById('chkVoucherInput');
  const perksBox = document.getElementById('chkUnlockedPerksBox');
  const perkTitle = document.getElementById('chkPerkTitle');
  const perkList = document.getElementById('chkPerkList');

  const { subtotal, discount, shipping, finalTotal } = getCartTotals();

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (countEl) countEl.textContent = totalCount;

  if (chkVoucherInput && state.voucherCode) {
    chkVoucherInput.value = state.voucherCode;
  }

  if (itemsContainer) {
    if (state.cart.length === 0) {
      itemsContainer.innerHTML = '<p style="color:#524E48; font-size:0.88rem; font-weight:500;">Giỏ hàng trống.</p>';
    } else {
      itemsContainer.innerHTML = state.cart.map(item => `
        <div class="chk-item">
          <div class="chk-item-info">
            <strong>${item.name} (x${item.quantity})</strong>
            <span>Size: ${item.size} • In: #${item.customNumber} ${item.customName}</span>
          </div>
          <strong>${state.discountRate === 1 ? '<s style="color:#8C857B;font-weight:500;margin-right:4px;">' + formatVND(item.price * item.quantity) + '</s> <span style="color:#15603A;">0đ (FREE)</span>' : formatVND(item.price * item.quantity)}</strong>
        </div>
      `).join('');
    }
  }

  if (subEl) subEl.textContent = formatVND(subtotal);
  if (shipEl) shipEl.textContent = shipping === 0 ? 'MIỄN PHÍ' : formatVND(shipping);
  if (totalEl) {
    totalEl.textContent = (finalTotal === 0 && subtotal > 0) ? '0đ (MIỄN PHÍ 100%)' : formatVND(finalTotal);
  }
  if (qrAmountEl) qrAmountEl.textContent = formatVND(finalTotal);

  if (discRow && discEl) {
    if (discount > 0) {
      discRow.style.display = 'flex';
      const rateBadge = state.discountRate >= 0.5 ? ` (-${Math.round(state.discountRate * 100)}%)` : '';
      discEl.textContent = `-${formatVND(discount)}${rateBadge}`;
    } else {
      discRow.style.display = 'none';
    }
  }

  if (perksBox && perkList) {
    if (state.unlockedPerks && state.unlockedPerks.length > 0) {
      perksBox.style.display = 'block';
      if (perkTitle) {
        perkTitle.textContent = state.fanCardTier
          ? `Đặc Quyền ${state.fanCardTier} Đã Kích Hoạt`
          : 'Đặc Quyền & Quà Tặng Mini-Game Đã Mở Khóa';
      }
      perkList.innerHTML = state.unlockedPerks.map(p => `<li>${p}</li>`).join('');
    } else {
      perksBox.style.display = 'none';
    }
  }
}

// 10-Question Manchester United Quiz Data for "Lấy Voucher" Game
const VOUCHER_QUIZ_10_QUESTIONS = [
  {
    q: 'Trong trận Chung kết Champions League 2008 dưới mưa Moscow, ai là người bật cao đánh đầu ghi bàn mở tỷ số 1-0 cho Manchester United ở phút 26?',
    options: ['Wayne Rooney', 'Cristiano Ronaldo', 'Carlos Tevez', 'Paul Scholes'],
    answer: 1,
    explain: 'Phút 26, từ quả tạt chuẩn xác của Wes Brown, Cristiano Ronaldo bật cao hơn tất cả đánh đầu tung lưới Petr Čech.'
  },
  {
    q: 'Thủ môn huyền thoại nào đã cản phá cú sút luân lưu quyết định của Nicolas Anelka ở lượt sút thứ 7, đưa MU lên đỉnh châu Âu năm 2008?',
    options: ['Peter Schmeichel', 'David de Gea', 'Edwin van der Sar', 'Fabien Barthez'],
    answer: 2,
    explain: 'Edwin van der Sar đã chỉ tay sang trái để đánh lạc hướng rồi bay người sang phải cản phá cú sút của Anelka!'
  },
  {
    q: 'Sân vận động Old Trafford của Manchester United được huyền thoại Sir Bobby Charlton đặt biệt danh nổi tiếng là gì?',
    options: ['Nhà Hát Của Những Giấc Mơ (Theatre of Dreams)', 'Pháo Đài Đỏ (Red Fortress)', 'Thánh Đường Nước Anh', 'Đấu Trường Huyền Thoại'],
    answer: 0,
    explain: 'Old Trafford luôn được biết đến trên toàn thế giới với tên gọi "The Theatre of Dreams" — Nhà Hát Của Những Giấc Mơ.'
  },
  {
    q: 'Huấn luyện viên vĩ đại nhất lịch sử Manchester United — người đã mang về 38 danh hiệu lớn trong 26 năm dẫn dắt CLB (1986–2013) là ai?',
    options: ['Sir Matt Busby', 'Sir Alex Ferguson', 'José Mourinho', 'Tommy Docherty'],
    answer: 1,
    explain: 'Sir Alex Ferguson dẫn dắt Quỷ Đỏ từ tháng 11/1986 đến năm 2013 và giành tổng cộng 38 danh hiệu lớn nhỏ.'
  },
  {
    q: 'Mùa giải "Cú Ăn Ba" (The Treble: Ngoại hạng Anh, FA Cup, Champions League) vĩ đại đầu tiên trong lịch sử bóng đá Anh của MU diễn ra vào năm nào?',
    options: ['Mùa giải 1998/1999', 'Mùa giải 1995/1996', 'Mùa giải 2002/2003', 'Mùa giải 2010/2011'],
    answer: 0,
    explain: 'Mùa giải 1998/99 khép lại bằng 2 bàn thắng ngược dòng kinh điển ở phút bù giờ tại Camp Nou trước Bayern Munich.'
  },
  {
    q: 'Trong mùa giải đỉnh cao 2007/2008, Cristiano Ronaldo đã ghi tổng cộng bao nhiêu bàn thắng trên mọi đấu trường để giành Chiếc Giày Vàng châu Âu và Quả Bóng Vàng 2008?',
    options: ['31 bàn thắng', '36 bàn thắng', '42 bàn thắng', '50 bàn thắng'],
    answer: 2,
    explain: 'Ronaldo ghi tới 42 bàn sau 49 trận trên mọi đấu trường (31 bàn tại Premier League, 8 bàn tại Champions League).'
  },
  {
    q: 'Ai là người tung cú sút xa sấm sét từ cự ly 25m vào lưới Barcelona ở bán kết lượt về Champions League 2007/08, đưa MU thẳng tiến tới Moscow?',
    options: ['Michael Carrick', 'Paul Scholes', 'Owen Hargreaves', 'Ryan Giggs'],
    answer: 1,
    explain: 'Phút 14 tại Old Trafford, Paul Scholes tung cú vuốt bóng cháy lưới Victor Valdés, ghi bàn duy nhất của cả cặp bán kết.'
  },
  {
    q: 'Cặp trung vệ "Bức tường thép" xuất sắc nhất châu Âu của Manchester United mùa giải 2007/2008 là bộ đôi nào?',
    options: ['Rio Ferdinand & Nemanja Vidić', 'Jaap Stam & Ronny Johnsen', 'Gary Pallister & Steve Bruce', 'Raphaël Varane & Lisandro Martínez'],
    answer: 0,
    explain: 'Rio Ferdinand và Nemanja Vidić tạo nên lá chắn thép chỉ để lọt lưới 22 bàn sau 38 vòng Ngoại hạng Anh 2007/08.'
  },
  {
    q: 'Cầu thủ nào giữ kỷ lục khoác áo Manchester United nhiều trận nhất mọi thời đại với 963 lần ra sân chính thức?',
    options: ['Sir Bobby Charlton', 'Wayne Rooney', 'Ryan Giggs', 'Gary Neville'],
    answer: 2,
    explain: 'Huyền thoại xứ Wales Ryan Giggs đã gắn bó trọn sự nghiệp với Quỷ Đỏ và ra sân kỷ lục 963 trận.'
  },
  {
    q: 'Nhà tài trợ in trước ngực chiếc áo đấu đỏ huyền thoại của Manchester United trong đêm chung kết Champions League 2008 tại Moscow là thương hiệu nào?',
    options: ['SHARP', 'Vodafone', 'AIG', 'AON'],
    answer: 2,
    explain: 'Logo AIG màu trắng nổi bật trên nền áo đỏ sọc trắng sau lưng là biểu tượng bất hủ của giai đoạn 2006–2009.'
  }
];

function setupCheckoutMinigames() {
  // -------------------- GAME 1: 10-QUESTION VOUCHER QUIZ --------------------
  const vqModal = document.getElementById('voucherQuizModal');
  const btnOpenQuiz1 = document.getElementById('btnOpenVoucherQuiz');
  const btnOpenQuiz2 = document.getElementById('btnQuickOpenVoucherQuiz');
  const btnCloseQuiz = document.getElementById('btnCloseVoucherQuiz');

  const qmTier7 = document.getElementById('qmTier7');
  const qmTier89 = document.getElementById('qmTier89');
  const qmTier10 = document.getElementById('qmTier10');

  const vquizPlayArea = document.getElementById('vquizPlayArea');
  const vquizResultArea = document.getElementById('vquizResultArea');
  const vqCurrentNum = document.getElementById('vqCurrentNum');
  const vqDotsTrack = document.getElementById('vqDotsTrack');
  const vqCorrectCount = document.getElementById('vqCorrectCount');
  const vqProgressBar = document.getElementById('vqProgressBar');
  const vqMascotIcon = document.getElementById('vqMascotIcon');
  const vqCategoryTag = document.getElementById('vqCategoryTag');
  const vqQuestionText = document.getElementById('vqQuestionText');
  const vqOptionsGrid = document.getElementById('vqOptionsGrid');
  const vqFeedbackBanner = document.getElementById('vqFeedbackBanner');
  const btnVqRestartMid = document.getElementById('btnVqRestartMid');
  const btnVqNextQuestion = document.getElementById('btnVqNextQuestion');

  const vqResultMedal = document.getElementById('vqResultMedal');
  const vqResultScoreTag = document.getElementById('vqResultScoreTag');
  const vqResultTitle = document.getElementById('vqResultTitle');
  const vqResultDesc = document.getElementById('vqResultDesc');
  const vqRewardShowcase = document.getElementById('vqRewardShowcase');
  const btnVqPlayAgain = document.getElementById('btnVqPlayAgain');
  const btnVqClaimReward = document.getElementById('btnVqClaimReward');

  let vqState = {
    idx: 0,
    score: 0,
    answered: false,
    history: new Array(VOUCHER_QUIZ_10_QUESTIONS.length).fill(null),
    unlockedCode: null
  };

  function updateVqMilestones() {
    if (qmTier7) qmTier7.classList.toggle('achieved', vqState.score >= 7);
    if (qmTier89) qmTier89.classList.toggle('achieved', vqState.score >= 8);
    if (qmTier10) qmTier10.classList.toggle('achieved', vqState.score === 10);
  }

  function renderVqDots() {
    if (!vqDotsTrack) return;
    vqDotsTrack.innerHTML = VOUCHER_QUIZ_10_QUESTIONS.map((_, i) => {
      let cls = 'vq-dot';
      if (i === vqState.idx && vqState.history[i] === null) cls += ' current';
      if (vqState.history[i] === true) cls += ' ok';
      if (vqState.history[i] === false) cls += ' err';
      return `<span class="${cls}">${i + 1}</span>`;
    }).join('');
  }

  function renderVqQuestion() {
    const total = VOUCHER_QUIZ_10_QUESTIONS.length;
    if (vqState.idx >= total) {
      showVqResult();
      return;
    }

    const item = VOUCHER_QUIZ_10_QUESTIONS[vqState.idx];
    vqState.answered = false;

    if (vquizPlayArea) vquizPlayArea.style.display = 'block';
    if (vquizResultArea) vquizResultArea.style.display = 'none';
    if (vqCurrentNum) vqCurrentNum.textContent = String(vqState.idx + 1).padStart(2, '0');
    if (vqCorrectCount) vqCorrectCount.textContent = vqState.score;
    if (vqProgressBar) vqProgressBar.style.width = `${((vqState.idx + 1) / total) * 100}%`;
    if (vqMascotIcon) vqMascotIcon.textContent = ['😈', '⚽', '🏆', '🔥', '👑'][vqState.idx % 5];
    if (vqCategoryTag) vqCategoryTag.textContent = `CÂU HỎI ${String(vqState.idx + 1).padStart(2, '0')} / 10 • SĂN VOUCHER QUỶ ĐỎ`;
    if (vqQuestionText) vqQuestionText.textContent = item.q;

    if (vqFeedbackBanner) {
      vqFeedbackBanner.style.display = 'none';
      vqFeedbackBanner.className = 'vq-feedback-banner';
    }
    if (btnVqNextQuestion) {
      btnVqNextQuestion.style.display = 'none';
      btnVqNextQuestion.innerHTML = (vqState.idx === total - 1)
        ? 'Xem Kết Quả & Mở Quà Tặng <i class="fa-solid fa-gift"></i>'
        : 'Câu Tiếp Theo <i class="fa-solid fa-arrow-right"></i>';
    }

    updateVqMilestones();
    renderVqDots();

    const letters = ['A', 'B', 'C', 'D'];
    if (vqOptionsGrid) {
      vqOptionsGrid.innerHTML = item.options.map((opt, optIdx) => `
        <button type="button" class="vq-opt-btn" data-opt="${optIdx}">
          <span class="vq-opt-letter">${letters[optIdx]}</span>
          <span>${opt}</span>
        </button>
      `).join('');

      vqOptionsGrid.querySelectorAll('.vq-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (vqState.answered) return;
          vqState.answered = true;
          const chosen = parseInt(btn.getAttribute('data-opt'), 10);
          const isCorrect = chosen === item.answer;
          vqState.history[vqState.idx] = isCorrect;

          vqOptionsGrid.querySelectorAll('.vq-opt-btn').forEach((b, bIdx) => {
            b.disabled = true;
            if (bIdx === item.answer) b.classList.add('correct');
            if (bIdx === chosen && !isCorrect) b.classList.add('wrong');
          });

          if (isCorrect) {
            vqState.score++;
            if (vqCorrectCount) vqCorrectCount.textContent = vqState.score;
            playTone(740, 'triangle', 0.16);
            if (vqFeedbackBanner) {
              vqFeedbackBanner.style.display = 'block';
              vqFeedbackBanner.className = 'vq-feedback-banner ok';
              vqFeedbackBanner.innerHTML = `<strong>✓ Chính xác! (${vqState.score}/10 câu đúng)</strong> — ${item.explain}`;
            }
          } else {
            playTone(240, 'sawtooth', 0.18);
            if (vqFeedbackBanner) {
              vqFeedbackBanner.style.display = 'block';
              vqFeedbackBanner.className = 'vq-feedback-banner err';
              vqFeedbackBanner.innerHTML = `<strong>✕ Chưa đúng!</strong> Đáp án chuẩn là <strong>${letters[item.answer]}. ${item.options[item.answer]}</strong> — ${item.explain}`;
            }
          }

          updateVqMilestones();
          renderVqDots();
          if (btnVqNextQuestion) btnVqNextQuestion.style.display = 'inline-flex';
        });
      });
    }
  }

  function showVqResult() {
    if (vquizPlayArea) vquizPlayArea.style.display = 'none';
    if (vquizResultArea) vquizResultArea.style.display = 'block';

    const s = vqState.score;
    if (vqResultScoreTag) vqResultScoreTag.textContent = `ĐÚNG ${s} / 10 CÂU`;

    if (s === 10) {
      vqState.unlockedCode = 'GOAT100';
      if (vqResultMedal) vqResultMedal.textContent = '👑';
      if (vqResultTitle) vqResultTitle.textContent = 'TUYỆT ĐỈNH 10/10! BẠN ĐƯỢC MUA FREE 100% TẤT CẢ CÁC LOẠI ÁO!';
      if (vqResultDesc) vqResultDesc.textContent = 'Hoàn hảo tuyệt đối! Bạn chính thức được cấp Thẻ Fan Cứng Huyền Thoại và mở khóa đặc quyền MUA FREE 100% toàn bộ các loại áo đấu trong đơn hàng!';
      if (vqRewardShowcase) {
        vqRewardShowcase.innerHTML = `
          <div class="mu-fan-vip-card">
            <div class="fan-card-top">
              <span>MANCHESTER UNITED • OFFICIAL FAN CLUB</span>
              <span>LEGEND 10/10 • FREE ALL KITS</span>
            </div>
            <div class="fan-card-body">
              <h4>THẺ FAN CỨNG HUYỀN THOẠI (10/10)</h4>
              <p>Đặc quyền tối thượng: Mua FREE 100% tất cả các loại áo đấu + Tặng kèm Khăn quàng cổ Stretford End & Huy hiệu Vàng Moscow 2008 + Free Ship Hỏa tốc.</p>
            </div>
            <div class="fan-card-footer">
              <span>ID: #MUFC-GOAT-2008</span>
              <span>ĐIỂM SỐ: 10/10 TUYỆT ĐỐI</span>
            </div>
          </div>
          <div class="vq-voucher-ticket">
            <div>
              <strong>VOUCHER MUA FREE 100% TẤT CẢ CÁC LOẠI ÁO</strong>
              <span>Áp dụng giảm 100% (0đ) trực tiếp tại trang Thanh Toán</span>
            </div>
            <span class="vq-code-pill">GOAT100</span>
          </div>
        `;
      }
      if (btnVqClaimReward) {
        btnVqClaimReward.style.display = 'inline-flex';
        btnVqClaimReward.innerHTML = '<i class="fa-solid fa-crown"></i> Kích Hoạt Mua FREE 100% Tất Cả Áo Ngay';
      }
      if (typeof fireConfetti === 'function') fireConfetti();
    } else if (s === 8 || s === 9) {
      vqState.unlockedCode = 'VIPFAN85';
      if (vqResultMedal) vqResultMedal.textContent = '💳';
      if (vqResultTitle) vqResultTitle.textContent = `XUẤT SẮC (${s}/10)! TẶNG THẺ FAN CỨNG MU + VOUCHER 85% & QUÀ TẶNG!`;
      if (vqResultDesc) vqResultDesc.textContent = `Với ${s}/10 câu trả lời đúng, bạn nhận ngay Thẻ Fan Cứng MU chính thức kèm Voucher giảm 85% và bộ quà tặng nhiều hơn (Khăn Stretford End + Huy hiệu Moscow 2008)!`;
      if (vqRewardShowcase) {
        vqRewardShowcase.innerHTML = `
          <div class="mu-fan-vip-card">
            <div class="fan-card-top">
              <span>MANCHESTER UNITED • RED DEVILS VIP</span>
              <span>THẺ FAN CỨNG MU (${s}/10)</span>
            </div>
            <div class="fan-card-body">
              <h4>THẺ FAN CỨNG QUỶ ĐỎ CHÍNH THỨC</h4>
              <p>Đặc quyền: Giảm 85% toàn bộ đơn hàng + Tặng kèm Khăn quàng cổ Stretford End + Huy hiệu C1 Moscow 2008 + Miễn phí giao hàng Hỏa tốc.</p>
            </div>
            <div class="fan-card-footer">
              <span>ID: #MUFC-VIP-08</span>
              <span>ĐIỂM SỐ: ${s}/10 CÂU ĐÚNG</span>
            </div>
          </div>
          <div class="vq-voucher-ticket">
            <div>
              <strong>SIÊU VOUCHER FAN CỨNG GIẢM 85% + BỘ QUÀ TẶNG MU</strong>
              <span>Tự động cộng kèm Thẻ Fan Cứng MU & Quà tặng vào đơn hàng</span>
            </div>
            <span class="vq-code-pill">VIPFAN85</span>
          </div>
        `;
      }
      if (btnVqClaimReward) {
        btnVqClaimReward.style.display = 'inline-flex';
        btnVqClaimReward.innerHTML = '<i class="fa-solid fa-id-card"></i> Nhận Thẻ Fan Cứng MU & Áp Dụng Voucher 85%';
      }
      if (typeof fireConfetti === 'function') fireConfetti();
    } else if (s === 7) {
      vqState.unlockedCode = 'MUFAN70';
      if (vqResultMedal) vqResultMedal.textContent = '🎟️';
      if (vqResultTitle) vqResultTitle.textContent = 'CHÚC MỪNG (7/10)! BẠN NHẬN ĐƯỢC VOUCHER GIẢM GIÁ 70%!';
      if (vqResultDesc) vqResultDesc.textContent = 'Bạn đã trả lời đúng 7/10 câu hỏi và mở khóa thành công Voucher giảm giá 70%! (Mẹo: Đạt 8–9/10 để nhận thêm Thẻ Fan Cứng MU & Quà tặng, hoặc 10/10 để mua FREE tất cả áo!)';
      if (vqRewardShowcase) {
        vqRewardShowcase.innerHTML = `
          <div class="vq-voucher-ticket">
            <div>
              <strong>VOUCHER GIẢM GIÁ 70% ĐƠN HÀNG (MỐC 7/10)</strong>
              <span>Giảm trực tiếp 70% tổng giá trị đơn hàng tại trang Thanh Toán</span>
            </div>
            <span class="vq-code-pill">MUFAN70</span>
          </div>
        `;
      }
      if (btnVqClaimReward) {
        btnVqClaimReward.style.display = 'inline-flex';
        btnVqClaimReward.innerHTML = '<i class="fa-solid fa-ticket"></i> Áp Dụng Voucher Giảm 70% Ngay';
      }
      if (typeof fireConfetti === 'function') fireConfetti();
    } else {
      vqState.unlockedCode = null;
      if (vqResultMedal) vqResultMedal.textContent = '⚽';
      if (vqResultTitle) vqResultTitle.textContent = `BẠN ĐẠT ${s}/10 CÂU — CẦN ĐẠT TỪ 7/10 ĐỂ LẤY VOUCHER 70%!`;
      if (vqResultDesc) vqResultDesc.textContent = 'Hãy thử sức lại ngay! Đạt 7/10 nhận Voucher 70%, đạt 8–9/10 nhận Thẻ Fan Cứng MU + Voucher 85% & Quà tặng, và đạt 10/10 được mua FREE 100% tất cả các loại áo!';
      if (vqRewardShowcase) {
        vqRewardShowcase.innerHTML = '';
      }
      if (btnVqClaimReward) btnVqClaimReward.style.display = 'none';
    }
  }

  function openVoucherQuizModal() {
    if (!vqModal) return;
    vqState = {
      idx: 0,
      score: 0,
      answered: false,
      history: new Array(VOUCHER_QUIZ_10_QUESTIONS.length).fill(null),
      unlockedCode: null
    };
    renderVqQuestion();
    vqModal.classList.add('active');
  }

  function closeVoucherQuizModal() {
    if (vqModal) vqModal.classList.remove('active');
  }

  if (btnOpenQuiz1) btnOpenQuiz1.addEventListener('click', openVoucherQuizModal);
  if (btnOpenQuiz2) btnOpenQuiz2.addEventListener('click', openVoucherQuizModal);
  if (btnCloseQuiz) btnCloseQuiz.addEventListener('click', closeVoucherQuizModal);
  if (vqModal) {
    vqModal.addEventListener('click', (e) => {
      if (e.target === vqModal) closeVoucherQuizModal();
    });
  }

  if (btnVqNextQuestion) {
    btnVqNextQuestion.addEventListener('click', () => {
      vqState.idx++;
      renderVqQuestion();
    });
  }

  if (btnVqRestartMid) {
    btnVqRestartMid.addEventListener('click', openVoucherQuizModal);
  }

  if (btnVqPlayAgain) {
    btnVqPlayAgain.addEventListener('click', openVoucherQuizModal);
  }

  if (btnVqClaimReward) {
    btnVqClaimReward.addEventListener('click', () => {
      if (vqState.unlockedCode && typeof window.applyMURewardVoucher === 'function') {
        window.applyMURewardVoucher(vqState.unlockedCode);
      }
      closeVoucherQuizModal();
    });
  }

  // -------------------- GAME 2: MOSCOW 2008 PENALTY SHOOTOUT WITH RONALDO --------------------
  const penModal = document.getElementById('penaltyGameModal');
  const btnOpenPen = document.getElementById('btnOpenPenaltyGame');
  const btnClosePen = document.getElementById('btnClosePenaltyGame');

  const penDotsStrip = document.getElementById('penDotsStrip');
  const penShotCounter = document.getElementById('penShotCounter');
  const penGoalCounter = document.getElementById('penGoalCounter');
  const penStadiumStage = document.getElementById('penStadiumStage');
  const penRainCanvas = document.getElementById('penRainCanvas');
  const penCommentary = document.getElementById('penCommentary');
  const penGoalkeeper = document.getElementById('penGoalkeeper');
  const penBall = document.getElementById('penBall');
  const penRonaldoFigure = document.getElementById('penRonaldoFigure');
  const penControlsFooter = document.getElementById('penControlsFooter');
  const penResultBox = document.getElementById('penResultBox');
  const penResultBadge = document.getElementById('penResultBadge');
  const penResultTitle = document.getElementById('penResultTitle');
  const penResultDesc = document.getElementById('penResultDesc');
  const btnPenPlayAgain = document.getElementById('btnPenPlayAgain');
  const btnPenClaimReward = document.getElementById('btnPenClaimReward');

  const penTargetZones = document.querySelectorAll('.pen-target-zone');
  const penQuickBtns = document.querySelectorAll('.pen-shot-btn');

  const TOTAL_PENALTY_SHOTS = 10;
  const WIN_GOALS_REQUIRED = 5;

  let penState = {
    shotIdx: 0,
    goals: 0,
    isShooting: false,
    results: new Array(TOTAL_PENALTY_SHOTS).fill(null)
  };

  // Moscow 2008 Rain Animation on Canvas
  let rainAnimId = null;
  function startMoscowRainCanvas() {
    if (!penRainCanvas) return;
    const ctx = penRainCanvas.getContext('2d');
    if (!ctx) return;
    penRainCanvas.width = penRainCanvas.offsetWidth || 800;
    penRainCanvas.height = penRainCanvas.offsetHeight || 390;

    const drops = Array.from({ length: 65 }, () => ({
      x: Math.random() * penRainCanvas.width,
      y: Math.random() * penRainCanvas.height,
      len: 10 + Math.random() * 14,
      speed: 7 + Math.random() * 6
    }));

    function drawRain() {
      if (!penModal || !penModal.classList.contains('active')) {
        rainAnimId = null;
        return;
      }
      ctx.clearRect(0, 0, penRainCanvas.width, penRainCanvas.height);
      ctx.strokeStyle = 'rgba(226, 232, 240, 0.32)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      drops.forEach(d => {
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 2.5, d.y + d.len);
        d.y += d.speed;
        d.x -= 1.2;
        if (d.y > penRainCanvas.height) {
          d.y = -15;
          d.x = Math.random() * penRainCanvas.width;
        }
        if (d.x < 0) d.x = penRainCanvas.width;
      });
      ctx.stroke();
      rainAnimId = requestAnimationFrame(drawRain);
    }

    if (!rainAnimId) {
      rainAnimId = requestAnimationFrame(drawRain);
    }
  }

  function renderPenScoreboard() {
    if (penShotCounter) {
      penShotCounter.textContent = `${Math.min(penState.shotIdx + 1, TOTAL_PENALTY_SHOTS)} / ${TOTAL_PENALTY_SHOTS}`;
    }
    if (penGoalCounter) {
      penGoalCounter.textContent = `${penState.goals} / ${TOTAL_PENALTY_SHOTS}`;
    }
    if (penDotsStrip) {
      penDotsStrip.innerHTML = penState.results.map((res, i) => {
        let cls = 'pen-shot-dot';
        let label = i + 1;
        if (i === penState.shotIdx && res === null) cls += ' active';
        if (res === true) {
          cls += ' goal';
          label = '⚽';
        } else if (res === false) {
          cls += ' miss';
          label = '✕';
        }
        return `<span class="${cls}" title="Lượt sút ${i + 1}">${label}</span>`;
      }).join('');
    }
  }

  function setShotButtonsDisabled(disabled) {
    penTargetZones.forEach(b => { b.disabled = disabled; });
    penQuickBtns.forEach(b => { b.disabled = disabled; });
  }

  function resetPitchPositions() {
    if (penGoalkeeper) penGoalkeeper.className = 'pen-goalkeeper';
    if (penBall) penBall.className = 'pen-ball';
    if (penRonaldoFigure) penRonaldoFigure.className = 'pen-ronaldo-figure';
    setShotButtonsDisabled(false);
  }

  function startPenaltyGame() {
    penState = {
      shotIdx: 0,
      goals: 0,
      isShooting: false,
      results: new Array(TOTAL_PENALTY_SHOTS).fill(null)
    };
    if (penStadiumStage) penStadiumStage.style.display = 'flex';
    if (penControlsFooter) penControlsFooter.style.display = 'block';
    if (penResultBox) penResultBox.style.display = 'none';
    if (penCommentary) {
      penCommentary.textContent = '🌧️ Đêm mưa Moscow 2008: Chọn 1 trong 6 góc khung thành bên dưới để Ronaldo #7 tung cú sút! (Vào ≥ 5/10 quả là THẮNG)';
    }
    resetPitchPositions();
    renderPenScoreboard();
    setTimeout(startMoscowRainCanvas, 60);
  }

  function handlePenaltyShot(zoneIndex) {
    if (penState.isShooting || penState.shotIdx >= TOTAL_PENALTY_SHOTS) return;
    penState.isShooting = true;
    setShotButtonsDisabled(true);

    // Goalkeeper AI: 6 zones (0..5). Keeper dives to a zone.
    // Give player a fun ~65% scoring chance on each shot so scoring 5/10 is exciting and achievable!
    let gkZone;
    if (Math.random() < 0.35) {
      gkZone = zoneIndex; // Keeper guessed right
    } else {
      const otherZones = [0, 1, 2, 3, 4, 5].filter(z => z !== zoneIndex);
      gkZone = otherZones[Math.floor(Math.random() * otherZones.length)];
    }

    const isGoal = zoneIndex !== gkZone;

    // Trigger Ronaldo run-up, ball flight & goalkeeper dive
    if (penRonaldoFigure) penRonaldoFigure.classList.add('kicking');
    if (penBall) penBall.className = `pen-ball shot-${zoneIndex}`;
    if (penGoalkeeper) penGoalkeeper.className = `pen-goalkeeper dive-${gkZone}`;

    const zoneNames = [
      'Góc Cao Trái',
      'Panenka Giữa Khung Thành',
      'Góc Cao Phải',
      'Góc Thấp Trái',
      'Chính Giữa Khung Thành',
      'Góc Thấp Phải'
    ];

    setTimeout(() => {
      penState.results[penState.shotIdx] = isGoal;
      if (isGoal) {
        penState.goals++;
        playTone(820, 'triangle', 0.2);
        if (penCommentary) {
          penCommentary.textContent = `⚽ VÀOOOOO! Lượt ${penState.shotIdx + 1}/10: Ronaldo sút tung lưới ${zoneNames[zoneIndex]}! (Đã ghi ${penState.goals}/10 bàn — Cần ≥ 5 bàn)`;
        }
      } else {
        playTone(220, 'sawtooth', 0.22);
        if (penCommentary) {
          penCommentary.textContent = `🧤 KHÔNG VÀO! Lượt ${penState.shotIdx + 1}/10: Thủ môn đã đoán đúng hướng bay người cản phá ở ${zoneNames[gkZone]}!`;
        }
      }

      penState.shotIdx++;
      renderPenScoreboard();

      setTimeout(() => {
        if (penState.shotIdx >= TOTAL_PENALTY_SHOTS) {
          showPenaltyFinalResult();
        } else {
          resetPitchPositions();
          penState.isShooting = false;
        }
      }, 900);
    }, 480);
  }

  function showPenaltyFinalResult() {
    if (penControlsFooter) penControlsFooter.style.display = 'none';
    if (penResultBox) penResultBox.style.display = 'block';

    const g = penState.goals;
    const isWin = g >= WIN_GOALS_REQUIRED;

    if (isWin) {
      if (penResultBadge) penResultBadge.textContent = `🏆 CHIẾN THẮNG MOSCOW 2008 (${g}/10 BÀN)`;
      if (penResultTitle) penResultTitle.textContent = `XUẤT SẮC! BẠN & RONALDO ĐÃ GHI ${g}/10 BÀN VÀ VÔ ĐỊCH C1!`;
      if (penResultDesc) {
        penResultDesc.textContent = `Bạn đã sút vào ${g}/10 quả phạt đền (đạt mốc ≥ 5/10 quả) dưới cơn mưa Luzhniki 2008! Phần thưởng mở khóa: Mã MOSCOW08 (Giảm 50% + Miễn phí Ship Hỏa tốc + Tặng Huy hiệu Vô Địch C1 2008)!`;
      }
      if (btnPenClaimReward) btnPenClaimReward.style.display = 'inline-flex';
      if (typeof fireConfetti === 'function') fireConfetti();
    } else {
      if (penResultBadge) penResultBadge.textContent = `🌧️ KẾT QUẢ: ${g}/10 BÀN — CHƯA ĐẠT MỐC 5 BÀN`;
      if (penResultTitle) penResultTitle.textContent = `TIẾC QUÁ! BẠN MỚI GHI ĐƯỢC ${g}/10 QUẢ (CẦN TỐI THIỂU 5/10 QUẢ)`;
      if (penResultDesc) {
        penResultDesc.textContent = 'Đừng nản lòng! Hãy bấm nút "Sút Lại Loạt 10 Quả" bên dưới để cùng Ronaldo chinh phục mốc 5/10 bàn thắng và lấy quà tặng Moscow 2008!';
      }
      if (btnPenClaimReward) btnPenClaimReward.style.display = 'none';
    }
  }

  function openPenaltyModal() {
    if (!penModal) return;
    startPenaltyGame();
    penModal.classList.add('active');
  }

  function closePenaltyModal() {
    if (penModal) penModal.classList.remove('active');
  }

  if (btnOpenPen) btnOpenPen.addEventListener('click', openPenaltyModal);
  if (btnClosePen) btnClosePen.addEventListener('click', closePenaltyModal);
  if (penModal) {
    penModal.addEventListener('click', (e) => {
      if (e.target === penModal) closePenaltyModal();
    });
  }

  penTargetZones.forEach(btn => {
    btn.addEventListener('click', () => {
      const z = parseInt(btn.getAttribute('data-zone'), 10);
      handlePenaltyShot(z);
    });
  });

  penQuickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const z = parseInt(btn.getAttribute('data-zone'), 10);
      handlePenaltyShot(z);
    });
  });

  if (btnPenPlayAgain) {
    btnPenPlayAgain.addEventListener('click', startPenaltyGame);
  }

  if (btnPenClaimReward) {
    btnPenClaimReward.addEventListener('click', () => {
      if (typeof window.applyMURewardVoucher === 'function') {
        window.applyMURewardVoucher('MOSCOW08');
      }
      closePenaltyModal();
    });
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
  setupCheckoutMinigames();
  setupSizeGuideListeners();
  setupSoundListeners();

  // Delegate [data-open-product] clicks (e.g., from History 2008 page to Retro 2008 product detail)
  document.addEventListener('click', (e) => {
    const openProdBtn = e.target.closest('[data-open-product]');
    if (openProdBtn) {
      e.preventDefault();
      const prodId = openProdBtn.getAttribute('data-open-product');
      navigateTo('product-detail', { id: prodId });
    }
  });

  // Render initial views
  renderCatalog();
  renderCartDrawer();

  // Check URL hash for direct links (e.g. #shop, #customizer, #cart, #checkout, #history)
  const hash = window.location.hash.replace('#', '');
  if (['home', 'shop', 'customizer', 'cart', 'checkout', 'history'].includes(hash)) {
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

  if (window.MotionPrimitives) {
    window.MotionPrimitives.init(document);
  }
});