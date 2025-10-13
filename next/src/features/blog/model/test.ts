// Определяем интерфейс нашего ответа
interface UserResponse {
  id: number;
  name: string;
}

// Точно определяем тип массива пользователей
type UsersResponse = UserResponse[];

// Функция для отправки GET-запроса к серверу
async function fetchUsers(): Promise<UsersResponse> {
  try {
    const response = await fetch('https://example.com/users'); // Запрашиваем список пользователей

    if (!response.ok) throw new Error(`Ошибка при получении данных (${response.status})`); // Проверяем статус ответа

    return await response.json(); // Преобразовываем JSON-ответ в нужный формат
  } catch (err) {
    console.error("Ошибка:", err); // Логируем ошибку в консоль
    throw err;                     // Перебрасываем исключение дальше
  }
}

// Основной скрипт, демонстрирующий использование нашей функции
(async () => {
  try {
    const users = await fetchUsers(); // Получаем пользователей
    
    users.map(i => console.log(i.id))        // Выводим результат в консоль
  } catch (err) {
    console.error(err.message);     // Отображаем сообщение об ошибке
  }
})();