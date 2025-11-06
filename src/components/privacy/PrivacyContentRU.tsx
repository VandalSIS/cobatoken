import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const privacyPrinciples = [
  {
    icon: Shield,
    title: 'Защита данных',
    description: 'Мы внедряем передовые меры безопасности для защиты вашей личной информации.',
  },
  {
    icon: Eye,
    title: 'Прозрачность',
    description: 'Мы четко сообщаем, какие данные мы собираем и как мы их используем.',
  },
  {
    icon: Lock,
    title: 'Безопасное хранение',
    description: 'Ваши данные зашифрованы и хранятся с использованием протоколов безопасности корпоративного уровня.',
  },
  {
    icon: Users,
    title: 'Контроль пользователя',
    description: 'Вы имеете полный контроль над своими данными и можете запросить их удаление в любое время.',
  },
];

export default function PrivacyContentRU() {
  return (
    <>
      {/* Privacy Principles */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Наши принципы конфиденциальности
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Основные ценности, которые определяют, как мы обрабатываем вашу личную информацию.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <Card key={principle.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-gold-600 dark:text-gold-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Privacy Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Политика конфиденциальности</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  Мы не собираем, и не используем, мы защищаем вашу информацию при посещении нашего веб-сайта, 
                  использовании наших услуг или взаимодействии с нашей платформой.
                </p>
                <p>
                  Мы применяем соответствующие меры безопасности для защиты вашей личной информации.
                </p>
                <ul>
                  <li>Шифрование данных при передаче и хранении</li>
                  <li>Многофакторная аутентификация для доступа</li>
                  <li>Регулярный аудит безопасности и тестирование на проникновение</li>
                  <li>Процедуры реагирования на инциденты и уведомления о нарушениях</li>
                </ul>
                <p>
                  Однако ни один метод передачи через Интернет или электронного хранения не является на 100% безопасным. 
                  Хотя мы стремимся использовать коммерчески приемлемые средства для защиты информации, мы со своей 
                  стороны можем гарантировать ее абсолютную безопасность.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle>Ваши права и выбор</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>У вас есть следующие права в отношении вашей личной информации:</p>
                <ul>
                  <li><strong>Доступ:</strong> Запрос доступа к вашей личной информации</li>
                  <li><strong>Исправление:</strong> Запрос исправления неточной информации</li>
                  <li><strong>Удаление:</strong> Запрос удаления вашей личной информации</li>
                  <li><strong>Переносимость:</strong> Запрос передачи ваших данных другому сервису</li>
                  <li><strong>Ограничение:</strong> Запрос ограничения обработки</li>
                  <li><strong>Возражение:</strong> Возражение против определенных типов обработки</li>
                  <li><strong>Отзыв согласия:</strong> Отзыв согласия на обработку данных</li>
                </ul>
                <p>
                  Чтобы воспользоваться этими правами, пожалуйста, используйте контактную форму на нашем веб-сайте. 
                  Мы ответим на ваш запрос в течение 30 дней.
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>Cookies и технологии отслеживания</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  Мы используем cookies и аналогичные технологии отслеживания для улучшения вашего опыта на нашем 
                  веб-сайте. Вы можете управлять настройками cookies через настройки вашего браузера.
                </p>
                <p>Типы cookies, которые мы используем:</p>
                <ul>
                  <li><strong>Обязательные Cookies:</strong> Необходимы для функциональности веб-сайта</li>
                  <li><strong>Аналитические Cookies:</strong> Помогают нам понять использование веб-сайта</li>
                  <li><strong>Пр едпочтительные Cookies:</strong> Запоминают ваши настройки и предпочтения</li>
                  <li><strong>Маркетинговые Cookies:</strong> Используются для таргетированной рекламы (с согласия)</li>
                </ul>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card>
              <CardHeader>
                <CardTitle>Международные передачи данных</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  Ваша информация может быть передана и обработана в странах, отличных от вашей страны проживания. 
                  Мы обеспечиваем наличие соответствующих гарантий для таких передач, включая:
                </p>
                <ul>
                  <li>Решения о достаточности соответствующих органов</li>
                  <li>Стандартные договорные оговорки</li>
                  <li>Обязательные корпоративные правила</li>
                  <li>Схемы сертификации</li>
                </ul>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Изменения в политике конфиденциальности</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  Мы можем обновлять эту Политику конфиденциальности время от времени. Мы уведомим вас о любых 
                  существенных изменениях, разместив новую политику на нашем веб-сайте и обновив дату "Последнее 
                  обновление". Ваше дальнейшее использование наших услуг после таких изменений означает принятие 
                  обновленной политики.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

