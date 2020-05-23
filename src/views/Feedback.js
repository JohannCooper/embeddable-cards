import React from 'react';

function Feedback() {
  const src = 'https://docs.google.com/forms/d/e/1FAIpQLSfVFkuyWL2t9z3PbECtIc49g-hjjVCGXhanKnBPBB_dAiCo4A/viewform';
  return <iframe title='feedback-form' src={src} style={{ border: 'none', flex: '1 1 auto' }}></iframe>;
}

export default Feedback;
