function register() {
    // الحصول على البيانات المدخلة من نموذج التسجيل
    var name = document.querySelector('.register-form input[placeholder="name"]').value;
    var password = document.querySelector('.register-form input[placeholder="password"]').value;
    var email = document.querySelector('.register-form input[placeholder="email address"]').value;
  
    // تخزين البيانات في LocalStorage
    localStorage.setItem('registeredName', name);
    localStorage.setItem('registeredPassword', password);
    localStorage.setItem('registeredEmail', email);
  
    alert('Registered successfully!');
    window.location.href = 'index.html'; // توجيه إلى الصفحة الرئيسية بعد التسجيل
  }
  
  function login() {
    // الحصول على البيانات المدخلة من نموذج تسجيل الدخول
    var username = document.querySelector('.login-form input[placeholder="username"]').value;
    var password = document.querySelector('.login-form input[placeholder="password"]').value;
  
    // جلب بيانات المستخدم المسجلة من LocalStorage
    var registeredName = localStorage.getItem('registeredName');
    var registeredPassword = localStorage.getItem('registeredPassword');
  
    // التحقق من صحة بيانات تسجيل الدخول
    if (username === registeredName && password === registeredPassword) {
      alert('Logged in successfully!');
      window.location.href = 'index.html'; // توجيه إلى الصفحة الرئيسية بعد تسجيل الدخول
    } else {
      alert('Invalid username or password!');
    }
  }
  