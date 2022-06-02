import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CreateQuestionnairePage } from '@/pages/CreateQuestionnairePage/CreateQuestionnairePage';
import { Homepage } from '@/pages/Homepage/Homepage';
import { QuestionnairePage } from '@/pages/QuestionnairePage/QuestionnairePage';

const RoutesComponent: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/questionnaire/new" element={<CreateQuestionnairePage />} />
      <Route path="/questionnaire/:id" element={<QuestionnairePage />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
