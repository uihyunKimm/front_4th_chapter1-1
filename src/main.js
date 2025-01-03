//웹 스토리지
class UserPreferences {
  constructor(){
    this.preferences = JSON.parse(localStorage.getItem('userPreferences'))||
    {};
  }
  set(key, value) {
    this.preferences[key] = value;
    this.save();
  }

  get(key) {
    return this.preferences[key];
  }

  save(){
    localStorage.setItem('userPreferences',JSON.stringify(this.preferences))
  }
  clear() {
    // 모든 데이터를 삭제
    localStorage.removeItem('userPreferences');
  }
}
const prefs = new UserPreferences();
const Header = () => `
  <div class="bg-gray-100 flex justify-center">
    <div class="max-w-md w-full">
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class="text-blue-600">홈</a></li>
          <li><a href="/profile" class="text-gray-600">프로필</a></li>
          <li><a href="/login" class="text-gray-600">로그인</a></li>
          <li><a href="/" id="logout-btn" class="text-gray-600">로그아웃</a></li>
        </ul>
      </nav>
    </div>
  </div>
`;
const Footer = () => `
      <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
`;
const HomePage = () => `
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">

      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">홍길동</p>
                <p class="text-sm text-gray-500">5분 전</p>
              </div>
            </div>
            <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">김철수</p>
                <p class="text-sm text-gray-500">15분 전</p>
              </div>
            </div>
            <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">이영희</p>
                <p class="text-sm text-gray-500">30분 전</p>
              </div>
            </div>
            <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">박민수</p>
                <p class="text-sm text-gray-500">1시간 전</p>
              </div>
            </div>
            <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">정수연</p>
                <p class="text-sm text-gray-500">2시간 전</p>
              </div>
            </div>
            <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
`;
const NotFoundPage = () => `
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`;
const LoginPage = () => `
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form>
        <div class="mb-4">
          <input id="id" type="text" placeholder="이메일 또는 전화번호" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input id="pwd" type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button id="submit-btn" type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`;
const ProfilePage = () => `
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form>
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="홍길동"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="hong@example.com"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                >
안녕하세요, 항해플러스에서 열심히 공부하고 있는 홍길동입니다.</textarea
                >
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  </div>
`;

// 초기 렌더링 구조
document.body.innerHTML = `
  <div id="app">
    <div id="header-container"></div>
    <div id="content-container"></div>
    <div id="footer-container"></div>
  </div>
`;

// Router 클래스 수정
class Router {
  constructor() {
    this.routes = {};
    window.addEventListener('popstate', this.handlePopState.bind(this));
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  navigateTo(path) {
    history.pushState(null, '', path);
    this.handleRoute(path);
  }

  handlePopState() {
    this.handleRoute(window.location.pathname);
  }

  handleRoute(path) {
    const handler = this.routes[path];
    const headerContainer = document.getElementById('header-container');
    const contentContainer = document.getElementById('content-container');
    const footerContainer = document.getElementById('footer-container');

    if (handler) {
      // 로그인 페이지일 경우 Header와 Footer를 숨기고 LoginPage만 표시
      if (path === '/login') {
        headerContainer.innerHTML = ''; // Header 제거
        footerContainer.innerHTML = ''; // Footer 제거
        contentContainer.innerHTML = handler(); // LoginPage 표시
      } else {
        // 로그인 페이지가 아닐 경우 Header, Footer 포함
        headerContainer.innerHTML = Header();
        footerContainer.innerHTML = Footer();
        contentContainer.innerHTML = handler(); // 해당 페이지 표시
      }
      this.bindEvents(path); // 페이지 렌더링 후 이벤트 바인딩
    } else {
      // NotFoundPage 처리
      headerContainer.innerHTML = Header();
      footerContainer.innerHTML = Footer();
      contentContainer.innerHTML = NotFoundPage();
    }
  }

  bindEvents(path) {
    if (path === '/login') {
      document.querySelector('#submit-btn').addEventListener('click', (e) => {
        e.preventDefault();

        const id = document.querySelector('#id').value;
        const pwd = document.querySelector('#pwd').value;

        prefs.set('id', id);
        prefs.set('pwd', pwd);

        console.log('Stored ID:', prefs.get('id'));
        console.log('Stored Password:', prefs.get('pwd'));

        alert('로그인 성공');
        this.navigateTo('/');
      });
    }

    const logoutBtn = document.querySelector('#logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();

        prefs.clear();
        console.log('로그아웃되었습니다.');
        alert('로그아웃되었습니다.');
        this.navigateTo('/login');
      });
    }
  }
}




document.addEventListener('DOMContentLoaded', () => {
  const router = new Router();

  // 라우터 경로 및 핸들러 등록
  router.addRoute('/', HomePage);
  router.addRoute('/login', LoginPage);
  router.addRoute('/profile', ProfilePage);
  router.addRoute('/error', NotFoundPage);

  // 초기 페이지 렌더링
  router.handleRoute(window.location.pathname);

  // 네비게이션 이벤트 설정
  document.querySelector('nav').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const path = e.target.getAttribute('href');
      router.navigateTo(path);
    }
  });
});