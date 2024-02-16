// async function loadJson(url) {
//     let response = await fetch(url)
//     if (response.status == 200) {
//         return await response.json();
//     } else {
//         throw new Error(response.status);
//     }
//   }
  
//   loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
async function loadJson(url) {
    respone = await fetch(url)
    if (response.status == 200) {
        return await response.json();
    } else {
        throw new HttpError(response);
    }
  }
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    let name = prompt("Введите логин?", "iliakan");
    try {
        user = await loadJson(`https://api.github.com/users/${name}`)
        await alert(`Полное имя: ${user.name}.`)
        return await user
    } catch (e) {
        if (err instanceof HttpError && err.response.status == 404) {
            alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            return demoGithubUser();
          } else {
            throw err;
          }
    }
  }
  
  demoGithubUser();

  async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    // ...что здесь написать?
    // чтобы вызвать wait() и дождаться результата "10" от async–функции
    // не забывайте, здесь нельзя использовать "await"
    wait().then(res => {
        alert(res)
    })
  }  