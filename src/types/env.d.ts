declare namespace NodeJS {
  interface ProcessEnv {
    DB_HOST: string;
    DB_PORT: string; // Тут вказуємо тип "string", оскільки всі змінні середовища за замовчуванням рядкові
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
  }
}
