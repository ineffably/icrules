import React from 'react';
import RuleEditor from '@icrules/editor';

export const Examples = () => {
  return (
    <div>
      <div>
        <RuleEditor facts={{ sky: 'blue' }} rules={{ all: [['sky', 'eq', 'blue']] }} />
      </div>
    </div>
  )
}
