
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  background: rgba(0, 0, 0, 0.55);
`;

const Modal = styled.div`
  position: relative;

  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  max-height: calc(100vh - 32px);

  overflow-y: auto;

  padding: 30px 25px;

  background: #ffffff;
  border-radius: 16px;

  color: #40352f;

  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    max-width: 420px;
    padding: 25px 20px;
    border-radius: 14px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  padding: 0;

  border: none;
  border-radius: 50%;

  background: #f5eee9;
  color: #66574f;

  font-size: 25px;
  line-height: 1;

  cursor: pointer;

  &:hover {
    background: #eadbd2;
  }

  &:focus-visible {
    outline: 2px solid #9b5948;
    outline-offset: 2px;
  }
`;

const Logo = styled.div`
  margin-bottom: 20px;

  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;

  color: #9b5948;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0 0 20px;

  font-size: 25px;
  line-height: 1.35;

  color: #9b5948;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Text = styled.p`
  margin: 0 0 15px;

  font-size: 16px;
  line-height: 1.6;

  color: #66574f;
  text-align: center;
`;

const SiteLink = styled.a`
  display: block;

  margin: 15px 0 20px;

  font-size: 22px;
  font-weight: 700;

  color: #9b5948;
  text-align: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.a`
  display: block;
  box-sizing: border-box;

  width: 100%;
  padding: 14px 18px;

  border-radius: 8px;

  background: #9b5948;
  color: #ffffff;

  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;

  text-align: center;
  text-decoration: none;

  transition: background 0.2s ease;

  &:hover {
    background: #754032;
  }

  &:focus-visible {
    outline: 3px solid #c99b88;
    outline-offset: 3px;
  }
`;

const ContinueButton = styled.button`
  display: block;
  box-sizing: border-box;

  width: 100%;
  margin-top: 20px;
  padding: 13px 18px;

  border: 1px solid #9b5948;
  border-radius: 8px;

  background: #ffffff;
  color: #9b5948;

  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #9b5948;
    color: #ffffff;
  }

  &:focus-visible {
    outline: 3px solid #c99b88;
    outline-offset: 3px;
  }
`;

const NewSiteNotice = ({ onClose }) => {
  return (
    <Overlay>
      <Modal
        role="dialog"
        aria-modal="true"
        aria-labelledby="new-site-title"
      >
        <CloseButton
          type="button"
          onClick={onClose}
          aria-label="Закрити повідомлення"
        >
          &times;
        </CloseButton>

        <Logo>ArtGolka</Logo>

        <Title id="new-site-title">
          Наш інтернет-магазин переїхав!
        </Title>

        <Text>
          Шановні клієнти та партнери!
        </Text>

        <Text>
          Ми розробили новий інтернет-магазин ArtGolka,
          де представлена актуальна інформація про нашу
          продукцію, новинки та асортимент.
        </Text>

        <Button
          href="https://artgolka.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Перейти до нового магазину
        </Button>

        <SiteLink
          href="https://artgolka.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          artgolka.com
        </SiteLink>

        <Text>
          Стара сторінка більше не оновлюватиметься.
          Усі нові товари та актуальна інформація
          публікуватимуться на новому сайті.
        </Text>

        <ContinueButton
          type="button"
          onClick={onClose}
        >
          Закрити та продовжити перегляд
        </ContinueButton>
      </Modal>
    </Overlay>
  );
};

export default NewSiteNotice;
