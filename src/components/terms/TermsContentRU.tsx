import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { FileText, Shield, AlertTriangle, Scale } from 'lucide-react';

const keyPoints = [
  {
    icon: FileText,
    title: 'Соглашение об услугах',
    description: 'Определяет отношения между вами и платформой COBA Token.',
  },
  {
    icon: Shield,
    title: 'Обязанности пользователя',
    description: 'Описывает ваши обязательства при использовании наших услуг.',
  },
  {
    icon: AlertTriangle,
    title: 'Раскрытие рисков',
    description: 'Важная информация о рисках инвестирования в криптовалюту.',
  },
  {
    icon: Scale,
    title: 'Соответствие законодательству',
    description: 'Требования для соблюдения нормативных требований и законного использования.',
  },
];

export default function TermsContentRU() {
  return (
    <>
      {/* Key Points */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Обзор ключевых условий
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Основные моменты, охватываемые нашими условиями.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point) => {
              const Icon = point.icon;
              return (
                <Card key={point.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-gold-600 dark:text-gold-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>1. Введение и принятие</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  Настоящие Условия ("Условия") представляют собой юридически обязательное соглашение между вами и 
                  COBA Token ("Компания", "мы", "наш" или "нас") относительно вашего использования нашего веб-сайта, 
                  платформы и услуг, связанных с токенами COBA.
                </p>
                <p>
                  Получая доступ к нашим услугам или используя их, вы подтверждаете, что прочитали, поняли и согласны 
                  соблюдать настоящие Условия. Если вы не согласны с какой-либо частью этих Условий, вы не должны 
                  использовать наши услуги.
                </p>
                <p>
                  Мы оставляем за собой право изменять настоящие Условия в любое время. Изменения вступают в силу 
                  немедленно после размещения на нашем веб-сайте. Ваше дальнейшее использование наших услуг после 
                  любых таких изменений означает принятие новых Условий.
                </p>
              </CardContent>
            </Card>

            {/* Definitions */}
            <Card>
              <CardHeader>
                <CardTitle>2. Определения</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <ul>
                  <li><strong>"COBA Token" или "COBA":</strong> Токен ERC-20, выпущенный нашей компанией, обеспеченный финансовыми резервами</li>
                  <li><strong>"Платформа":</strong> Наш веб-сайт, приложения и связанные услуги</li>
                  <li><strong>"Пользователь" или "Вы":</strong> Любое физическое или юридическое лицо, использующее наши услуги</li>
                  <li><strong>"Услуги":</strong> Все услуги, предоставляемые COBA Token, включая продажу токенов, торговлю и связанную деятельность</li>
                  <li><strong>"Резервы":</strong> Финансовые резервы, поддерживающие токены COBA</li>
                  <li><strong>"KYC":</strong> Процедуры проверки "Знай своего клиента"</li>
                  <li><strong>"AML":</strong> Требования соответствия по борьбе с отмыванием денег</li>
                </ul>
              </CardContent>
            </Card>

            {/* Eligibility */}
            <Card>
              <CardHeader>
                <CardTitle>3. Право на участие и регистрация аккаунта</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <h4>Требования к участию</h4>
                <p>Чтобы использовать наши услуги, вы должны:</p>
                <ul>
                  <li>Быть не моложе 18 лет (или совершеннолетия в вашей юрисдикции)</li>
                  <li>Иметь правоспособность заключать обязательные соглашения</li>
                  <li>Не быть резидентом юрисдикции, где наши услуги запрещены</li>
                  <li>Соблюдать все применимые законы и правила</li>
                  <li>Пройти процесс проверки KYC/AML</li>
                </ul>

                <h4>Регистрация аккаунта</h4>
                <p>При создании аккаунта вы соглашаетесь:</p>
                <ul>
                  <li>Предоставлять точную, полную и актуальную информацию</li>
                  <li>Поддерживать конфиденциальность учетных данных вашей учетной записи</li>
                  <li>Немедленно уведомлять нас о любом несанкционированном доступе к учетной записи</li>
                  <li>Принимать ответственность за все действия под вашей учетной записью</li>
                </ul>
              </CardContent>
            </Card>

            {/* Token Information */}
            <Card>
              <CardHeader>
                <CardTitle>4. Информация о токене COBA</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <h4>Характеристики токена</h4>
                <ul>
                  <li>COBA - это токен ERC-20 на блокчейне Ethereum</li>
                  <li>Каждый токен отражает стоимость 9,6 грамма золота</li>
                  <li>Токены имеют 3 десятичных знака с KOH в качестве наименьшей единицы</li>
                  <li>Общий выпуск ограничен 33 миллиардами токенов</li>
                  <li>Годовая эмиссия составляет 9 миллиардов токенов в год (при наличии обеспечения)</li>
                </ul>

                <h4>Обеспечение</h4>
                <ul>
                  <li>Резервы хранятся в сертифицированных застрахованных хранилищах</li>
                  <li>Независимые аудиты проводятся ежемесячно</li>
                  <li>Отчеты об аудите публикуются ежеквартально</li>
                  <li>Резервы могут использоваться только для обеспечения выпущенных токенов</li>
                </ul>
              </CardContent>
            </Card>

            {/* Risk Disclosures */}
            <Card>
              <CardHeader>
                <CardTitle>5. Раскрытие рисков</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className="font-bold text-red-600 dark:text-red-400">
                  ВАЖНО: Инвестиции в криптовалюту несут значительные риски. Вы должны тщательно рассмотреть эти 
                  риски перед покупкой токенов COBA:
                </p>

                <h4>Рыночные риски</h4>
                <ul>
                  <li>Стоимость токенов может значительно колебаться</li>
                  <li>Цены на золото подвержены рыночной волатильности</li>
                  <li>Ликвидность может быть ограничена при определенных рыночных условиях</li>
                  <li>Торговля может быть приостановлена во время экстремальных рыночных событий</li>
                </ul>

                <h4>Технологические риски</h4>
                <ul>
                  <li>Технология блокчейн относительно нова и развивается</li>
                  <li>Смарт-контракты могут содержать ошибки или уязвимости</li>
                  <li>Перегрузка сети может повлиять на обработку транзакций</li>
                  <li>Потеря приватного ключа может привести к безвозвратной потере токенов</li>
                </ul>

                <h4>Регуляторные риски</h4>
                <ul>
                  <li>Регулирование криптовалют развивается по всему миру</li>
                  <li>Будущие изменения в регулировании могут повлиять на полезность токенов</li>
                  <li>Некоторые юрисдикции могут запретить деятельность с криптовалютой</li>
                  <li>Требования соответствия могут измениться со временем</li>
                </ul>
              </CardContent>
            </Card>

            {/* Prohibited Activities */}
            <Card>
              <CardHeader>
                <CardTitle>6. Запрещенная деятельность</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>Вы соглашаетесь не участвовать в следующих запрещенных действиях:</p>
                <ul>
                  <li>Отмывание денег, финансирование терроризма или другая незаконная деятельность</li>
                  <li>Манипулирование рынком, мошенничество или обманные практики</li>
                  <li>Взлом, фишинг или попытки несанкционированного доступа</li>
                  <li>Создание нескольких учетных записей для обхода ограничений</li>
                  <li>Использование наших услуг в юрисдикциях, где это запрещено</li>
                  <li>Нарушение любых применимых законов, правил или прав третьих лиц</li>
                  <li>Попытки обратной разработки или компрометации наших систем</li>
                  <li>Распространение вредоносного ПО, вирусов или вредоносного кода</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle>7. Права интеллектуальной собственности</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  Все содержимое, товарные знаки, знаки обслуживания, логотипы и интеллектуальная собственность на 
                  нашей платформе принадлежат COBA Token или лицензированы нами. Вы не можете использовать, 
                  воспроизводить или распространять такое содержимое без нашего явного письменного разрешения.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle>8. Ограничение ответственности</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className="font-bold uppercase">
                  В МАКСИМАЛЬНОЙ СТЕПЕНИ, РАЗРЕШЕННОЙ ЗАКОНОМ, COBA TOKEN НЕ НЕСЕТ ОТВЕТСТВЕННОСТИ ЗА ЛЮБЫЕ 
                  КОСВЕННЫЕ, СЛУЧАЙНЫЕ, ОСОБЫЕ, ПОСЛЕДУЮЩИЕ ИЛИ ШТРАФНЫЕ УБЫТКИ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ, 
                  ПОТЕРЮ ПРИБЫЛИ, ДАННЫХ ИЛИ ИСПОЛЬЗОВАНИЯ.
                </p>
                <p>
                  Наша общая ответственность перед вами за все претензии, вытекающие из или связанные с настоящими 
                  Условиями или нашими услугами, не должна превышать сумму, которую вы заплатили нам в течение 
                  двенадцати месяцев, предшествующих претензии.
                </p>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card>
              <CardHeader>
                <CardTitle>9. Разрешение споров</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  Любые споры, возникающие из настоящих Условий или наших услуг, должны быть разрешены путем 
                  обязательного арбитража в соответствии с правилами соответствующей арбитражной организации.
                </p>
                <p>
                  Вы отказываетесь от своего права на участие в коллективных исках или коллективном арбитраже 
                  против COBA Token.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <CardTitle>10. Прекращение</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  Мы можем прекратить или приостановить действие вашей учетной записи и доступ к нашим услугам в 
                  любое время, с причиной или без, с уведомлением или без него. После прекращения ваше право на 
                  использование наших услуг немедленно прекращается.
                </p>
                <p>
                  Вы можете прекратить действие своей учетной записи в любое время, следуя процедуре закрытия 
                  учетной записи на нашей платформе.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle>11. Применимое право</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  Настоящие Условия регулируются и толкуются в соответствии с законами соответствующей юрисдикции, 
                  без учета принципов коллизионного права.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

