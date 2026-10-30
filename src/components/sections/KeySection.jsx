import { Link } from 'react-router-dom';
import { ROUTES, TELEGRAM, TRIAL_OFFER_LABEL } from '@utils/constants';

export default function KeySection() {
  return (
    <section id="key" className="mt-24">
      <div className="card" style={{ padding: 'clamp(1.4rem, 4vw, 2.2rem)' }}>
        <div className="grid-key">
          <div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.75rem)' }}>Нужен ключ для INCY</h2>
            <p className="mt-3" style={{ color: 'var(--color-ink-soft)', maxWidth: '40ch' }}>
              Стабильный ключ — {TRIAL_OFFER_LABEL}. Вставьте его в поле «Ссылка» в приложении INCY.
            </p>
            <p className="mt-2" style={{ color: 'var(--color-ink-soft)', maxWidth: '40ch', fontSize: '0.93rem' }}>
              Список серверов в приложении появляется из этого же ключа — своих серверов у INCY нет.
            </p>
            <p className="mt-2" style={{ color: 'var(--color-ink-soft)', maxWidth: '40ch', fontSize: '0.93rem' }}>
              Ключ уже был, но закончился срок?{' '}
              <Link to={ROUTES.LOGIN} style={{ color: 'var(--color-brand)' }}>
                Продлить подписку в личном кабинете →
              </Link>
            </p>
            <div className="keybox mt-4">
              https://sub.…/<span style={{ color: 'var(--color-ink-faint)' }}>ваш-ключ</span>
            </div>
          </div>
          <div
            className="glow-green"
            style={{
              borderRadius: '1rem',
              padding: '1.75rem',
              textAlign: 'center',
              background:
                'radial-gradient(120% 120% at 50% 0%, rgba(47,224,106,0.1), transparent 60%), var(--color-panel)',
              border: '1px solid var(--color-line-strong)',
            }}
          >
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--color-ink)' }}>
              Ключ для INCY — {TRIAL_OFFER_LABEL}
            </p>
            <p className="mt-2" style={{ color: 'var(--color-ink-soft)', fontSize: '0.97rem', maxWidth: '48ch', marginInline: 'auto' }}>
              Получите ключ за пару кликов и вставьте в INCY. Один ключ — до 5 устройств.
            </p>
            <div className="cta-row mt-4" style={{ justifyContent: 'center' }}>
              <Link to={ROUTES.LOGIN} className="btn btn-win">
                {TRIAL_OFFER_LABEL} →
              </Link>
            </div>
            <p className="mono mt-3" style={{ fontSize: '0.72rem', color: 'var(--color-ink-faint)' }}>
              триал 9 ₽ · оплата СБП · от 99 ₽/7 дн.
            </p>
            <p className="link-alt mt-1">
              Удобнее в Телеграме?{' '}
              <a href={TELEGRAM.BOT_URL} rel="noopener noreferrer" target="_blank">
                Ключ в боте →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
