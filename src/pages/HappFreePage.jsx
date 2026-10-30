import { Link } from 'react-router-dom';
import { RouteMeta } from '@components/seo/PageMeta';
import PageHero from '@components/sections/PageHero';
import FaqSection from '@components/sections/FaqSection';
import CtaBlock from '@components/sections/CtaBlock';
import ComparisonTable from '@components/sections/ComparisonTable';
import Button from '@components/ui/Button';
import { BRAND_META, ROUTES, TRIAL_OFFER_LABEL } from '@utils/constants';
import { buildTelegramBotUrl } from '@utils/botLink';

const FAQ = [
  {
    q: 'Что такое пробная подписка Happ?',
    a: `Пробная подписка — ${TRIAL_OFFER_LABEL.toLowerCase()}: полный доступ к VPN для Happ на 3 дня. Ключ выдаётся после оплаты триала в личном кабинете.`,
  },
  {
    q: 'Где оформить триал для Happ?',
    a: 'Зарегистрируйтесь на Зумерский VPN по email или Google, откройте личный кабинет → раздел «Купить» → тариф «Триал 3 дня».',
  },
  {
    q: 'На сколько дней пробная подписка Happ?',
    a: '3 дня. Стоимость — 9 ₽, оплата через СБП или карту РФ.',
  },
  {
    q: 'Нужна ли карта для регистрации?',
    a: 'Для входа карта не нужна. Оплата триала — 9 ₽ через СБП или карту РФ в разделе «Купить». Автосписаний нет.',
  },
  {
    q: 'Как получить подписку Happ через Telegram?',
    a: 'Откройте Telegram-бот Зумерский VPN и оформите доступ в мини-приложении — на сайте тот же аккаунт и те же тарифы.',
  },
  {
    q: 'Работают ли ключи после триала?',
    a: 'Да, ключ полностью рабочий. После 3 дней продлите подписку — тот же ключ в Happ останется.',
  },
  {
    q: 'Что после окончания пробной подписки?',
    a: 'Выберите платный тариф от 99 ₽ за 7 дней. Ключ не меняется — обновлять в Happ не нужно.',
  },
];

export default function HappFreePage() {
  return (
    <>
      <RouteMeta path={ROUTES.HAPP_FREE} />
      <PageHero
        title={`Пробная подписка Happ — ${TRIAL_OFFER_LABEL}`}
        subtitle="Оформите триал за минуту: регистрация, оплата 9 ₽ в личном кабинете, импорт ключа в Happ."
        primaryLabel={TRIAL_OFFER_LABEL}
        secondaryLabel="Через Telegram"
        secondaryTo={ROUTES.HAPP_TELEGRAM}
      />

      <section className="py-16 border-t border-zoomer-border">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-happ-ink mb-6">Что такое пробная подписка Happ</h2>
          <p className="text-happ-muted leading-relaxed mb-4">
            Пробная подписка Happ — {TRIAL_OFFER_LABEL.toLowerCase()}: те же VLESS-ключ, серверы и скорость, что на платных тарифах.
            Срок — 3 дня.
          </p>
          <p className="text-happ-muted leading-relaxed">
            Так можно проверить Happ перед покупкой длинного тарифа. Автопродления нет — только ручное продление в кабинете.
          </p>
        </div>
      </section>

      <section className="py-16 bg-zoomer-card/20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-happ-ink mb-8">Как оформить {TRIAL_OFFER_LABEL}</h2>
          <ol className="space-y-4 mb-12">
            {[
              `Нажмите «${TRIAL_OFFER_LABEL}»`,
              'Зарегистрируйтесь по email или Google',
              'В личном кабинете откройте «Купить» и оплатите триал',
              'Откройте Happ и импортируйте QR-код или ссылку',
            ].map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-zoomer-neon/20 text-zoomer-neon flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                <span className="text-happ-muted pt-1">{s}</span>
              </li>
            ))}
          </ol>

          <h3 className="text-xl font-bold text-happ-ink mb-4">Что входит в триал</h3>
          <ul className="space-y-2 text-happ-muted mb-8">
            <li>• Полноценный доступ к VPN на 3 дня</li>
            <li>• Happ VPN ключ с QR-кодом и ссылкой</li>
            <li>• Серверы в нескольких странах</li>
            <li>• Настройка за 1 минуту</li>
            <li>• Без автосписаний</li>
          </ul>

          <Link to={ROUTES.LOGIN}><Button>{TRIAL_OFFER_LABEL}</Button></Link>
        </div>
      </section>

      <section className="py-16 border-t border-zoomer-border">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-happ-ink mb-8 text-center">Триал vs платная подписка</h2>
          <ComparisonTable
            columns={['Функция', 'Триал 3 дня', 'Платная']}
            rows={[
              ['Срок действия', '3 дня', '7 дней — 2 года'],
              ['Стоимость', '9 ₽', 'От 99 ₽'],
              ['Серверы', 'Все серверы', 'Все серверы'],
              ['Количество устройств', 'До 5 устройств', 'До 5 устройств'],
              ['Автопродление', 'Нет', 'Нет'],
            ]}
          />
          <div className="text-center mt-8">
            <Link to={ROUTES.HAPP}><Button variant="secondary">Платные тарифы Happ</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zoomer-card/20 text-center px-4">
        <h2 className="text-xl font-bold text-happ-ink mb-4">Триал через Telegram</h2>
        <p className="text-happ-muted mb-6">Те же тарифы в мини-приложении бота {BRAND_META}</p>
        <a href={buildTelegramBotUrl()} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">Открыть Telegram бот</Button>
        </a>
      </section>

      <FaqSection items={FAQ} />
      <CtaBlock title="Получить подписку Happ" buttonLabel={TRIAL_OFFER_LABEL} />

      <div className="pb-12 text-center text-sm text-happ-faint">
        <Link to={ROUTES.HAPP} className="hover:text-zoomer-neon">Получить подписку Happ</Link>
        <span className="mx-2">·</span>
        <Link to={ROUTES.HAPP_DOWNLOAD} className="hover:text-zoomer-neon">Скачать Happ</Link>
      </div>
    </>
  );
}
