import { GlobalStyle } from "./style/globla";
import { Header } from "./components/Header";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  function handleOpenTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseTransactionModalOpen() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenTransactionModal={handleOpenTransactionModalOpen} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModalOpen }/>

      <GlobalStyle />
    </>
  );
}

export default App;
