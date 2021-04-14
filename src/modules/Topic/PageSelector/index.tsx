import React, { useState } from 'react';
import * as Styled from './styled';
import { boxShadow } from '@/ui-kit/styles/boxShadow';
import { useDeviceType } from '@/utils/useDeviceType';
import { usePopperTooltip } from 'react-popper-tooltip';
import { GoToPageWindow } from './GoToPageWindow';

function generateArray(size: number, creator: (index: number) => number) {
  return new Array(size).fill(0).map((_, key) => creator(key));
}

function createListOfNumbers(amount: number, currentItem: number) {
  if (amount <= 7) {
    return generateArray(amount, (index) => index + 1);
  }

  if (currentItem < 5) {
    return [...generateArray(5, (index) => index + 1), null, amount];
  }

  if (amount - currentItem >= 4) {
    return [1, null, ...generateArray(3, (index) => currentItem - 1 + index), null, amount];
  }

  return [1, null, ...generateArray(5, (index) => amount - 4 + index)];
}

const PageNumbersList = ({
  amount,
  currentIndex,
  setCurrentIndex
}: {
  amount: number;
  currentIndex: number;
  setCurrentIndex: (value: number) => void;
}) => {
  const numsList = createListOfNumbers(amount, currentIndex);

  const renderPageButtons = () => {
    return numsList.map((item, index) => {
      if (Object.is(null, item)) {
        return <Styled.TripleDots key={`dots-${index}`} />;
      }

      return (
        <Styled.PageNumberButton
          key={item}
          isActive={currentIndex === item}
          disabled={currentIndex === item}
          onClick={() => setCurrentIndex(item)}
        >
          {item}
        </Styled.PageNumberButton>
      );
    });
  };

  return <Styled.PageNumbersListContainer>{renderPageButtons()}</Styled.PageNumbersListContainer>;
};

export const PageSelector = () => {
  const { isMobile } = useDeviceType();
  const amount = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [isGoToPageWindowVisible, setIsGoToPageWindowVisible] = useState(false);
  const shouldShowBackButton = currentPage !== 1;
  const shouldShowForwardButton = currentPage !== amount;

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible: isTooltipVisible
  } = usePopperTooltip({
    trigger: 'click',
    closeOnOutsideClick: true,
    visible: isGoToPageWindowVisible,
    onVisibleChange: setIsGoToPageWindowVisible
  });

  const goNextPage = () => setCurrentPage((page) => page + 1);

  const goPrevPage = () => setCurrentPage((page) => page - 1);

  const handleGoToPageSubmit = (value: number) => {
    setCurrentPage(value);
    setIsGoToPageWindowVisible(false);
  };

  const renderGoToPageTooltip = () => {
    if (!isTooltipVisible) {
      return null;
    }

    return (
      <div ref={setTooltipRef} {...getTooltipProps({ className: 'tooltip-container' })}>
        <div {...getArrowProps({ className: 'tooltip-arrow' })} />
        <GoToPageWindow pagesAmount={amount} onSubmit={handleGoToPageSubmit} />
      </div>
    );
  };

  const renderMobileView = () => (
    <Styled.MobileSelectorContainer className={boxShadow}>
      {shouldShowBackButton && <Styled.BackButton onClick={goPrevPage}>Назад</Styled.BackButton>}
      <Styled.MobileGoToPageButton ref={setTriggerRef} active={isTooltipVisible}>
        {currentPage}/{amount}
      </Styled.MobileGoToPageButton>
      {renderGoToPageTooltip()}
      {shouldShowForwardButton && (
        <Styled.ForwardButton onClick={goNextPage}>Вперёд</Styled.ForwardButton>
      )}
    </Styled.MobileSelectorContainer>
  );

  const renderTabletAndDesktopView = () => (
    <Styled.SelectorContainer className={boxShadow}>
      <Styled.BackButton disabled={!shouldShowBackButton} onClick={goPrevPage}>
        Назад
      </Styled.BackButton>
      <PageNumbersList
        amount={amount}
        currentIndex={currentPage}
        setCurrentIndex={setCurrentPage}
      />
      <Styled.ForwardButton disabled={!shouldShowForwardButton} onClick={goNextPage}>
        Вперёд
      </Styled.ForwardButton>
      <Styled.GoToPageButton ref={setTriggerRef} active={isTooltipVisible}>
        Перейти на страницу
      </Styled.GoToPageButton>
      {renderGoToPageTooltip()}
    </Styled.SelectorContainer>
  );

  if (amount < 2) {
    return null;
  }

  return isMobile ? renderMobileView() : renderTabletAndDesktopView();
};
