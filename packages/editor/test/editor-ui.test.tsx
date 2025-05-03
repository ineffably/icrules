import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ICRulesEditor } from '../src';
import { RuleGroup } from '@icrules/core';

describe('Editor UI Components', () => {
  describe('ICRulesEditor', () => {
    const mockRules: RuleGroup = {
      all: [['age', 'gt', '18']]
    };
    
    const mockFacts = {
      age: 25,
      name: 'John'
    };

    it('renders without crashing', () => {
      render(<ICRulesEditor rules={mockRules} facts={mockFacts} />);
      expect(screen.getByText(/all/i)).toBeInTheDocument();
    });

    it('calls onChange when rules are updated', () => {
      const mockOnChange = jest.fn();
      render(
        <ICRulesEditor 
          rules={mockRules} 
          facts={mockFacts} 
          onChange={mockOnChange}
        />
      );

      // Find and interact with rule inputs
      const factInput = screen.getByDisplayValue('age');
      fireEvent.change(factInput, { target: { value: 'name' } });

      expect(mockOnChange).toHaveBeenCalled();
    });

    it('shows facts editor by default', () => {
      render(<ICRulesEditor rules={mockRules} facts={mockFacts} />);
      expect(screen.getByTitle('enter your facts here')).toBeInTheDocument();
    });

    it('hides facts editor when showFactsEditor is false', () => {
      render(
        <ICRulesEditor 
          rules={mockRules} 
          facts={mockFacts} 
          options={{ showFactsEditor: false }}
        />
      );
      expect(screen.queryByTitle('enter your facts here')).not.toBeInTheDocument();
    });
  });

  describe('Rule validation', () => {
    const mockRules: RuleGroup = {
      all: [['age', 'gt', '18']]
    };
    
    const mockFacts = {
      age: 25
    };

    it('shows pass indicator when rule is satisfied', () => {
      render(<ICRulesEditor rules={mockRules} facts={mockFacts} />);
      expect(screen.getByText('✓')).toBeInTheDocument();
    });

    it('shows fail indicator when rule is not satisfied', () => {
      render(
        <ICRulesEditor 
          rules={mockRules} 
          facts={{ age: 15 }} 
        />
      );
      expect(screen.getByText('✕')).toBeInTheDocument();
    });
  });

  describe('Rule Editor Interactions', () => {
    const mockRules: RuleGroup = {
      all: [['age', 'gt', '18']]
    };
    
    const mockFacts = {
      age: 25,
      name: 'John',
      isStudent: true
    };

    it('allows changing rule operator', () => {
      const mockOnChange = jest.fn();
      render(
        <ICRulesEditor 
          rules={mockRules} 
          facts={mockFacts} 
          onChange={mockOnChange}
        />
      );

      const operatorSelect = screen.getByDisplayValue('> greater than');
      fireEvent.change(operatorSelect, { target: { value: 'lt' } });

      expect(mockOnChange).toHaveBeenCalled();
      const lastCall = mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1][0];
      expect(lastCall.all[0][1]).toBe('lt');
    });

    it('allows changing rule value', () => {
      const mockOnChange = jest.fn();
      render(
        <ICRulesEditor 
          rules={mockRules} 
          facts={mockFacts} 
          onChange={mockOnChange}
        />
      );

      const valueInput = screen.getByDisplayValue('18');
      fireEvent.change(valueInput, { target: { value: '21' } });

      expect(mockOnChange).toHaveBeenCalled();
      const lastCall = mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1][0];
      expect(lastCall.all[0][2]).toBe('21');
    });

    it('allows adding new rules', () => {
      const mockOnChange = jest.fn();
      render(
        <ICRulesEditor 
          rules={mockRules} 
          facts={mockFacts} 
          onChange={mockOnChange}
        />
      );

      const addButton = screen.getByText('+');
      fireEvent.click(addButton);

      expect(mockOnChange).toHaveBeenCalled();
      const lastCall = mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1][0];
      expect(lastCall.all.length).toBe(2);
    });

    it('allows deleting rules', () => {
      const mockOnChange = jest.fn();
      render(
        <ICRulesEditor 
          rules={{
            all: [
              ['age', 'gt', '18'],
              ['name', 'eq', 'John']
            ]
          }} 
          facts={mockFacts} 
          onChange={mockOnChange}
        />
      );

      const deleteButton = screen.getByTitle('remove rule');
      fireEvent.click(deleteButton);

      expect(mockOnChange).toHaveBeenCalled();
      const lastCall = mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1][0];
      expect(lastCall.all.length).toBe(1);
      expect(lastCall.all[0][0]).toBe('age');
    });

    it('allows changing quantifier', () => {
      const mockOnChange = jest.fn();
      render(
        <ICRulesEditor 
          rules={mockRules} 
          facts={mockFacts} 
          onChange={mockOnChange}
        />
      );

      const quantifierSelect = screen.getByDisplayValue('all');
      fireEvent.change(quantifierSelect, { target: { value: 'any' } });

      expect(mockOnChange).toHaveBeenCalled();
      const lastCall = mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1][0];
      expect(lastCall.any).toBeDefined();
      expect(lastCall.all).toBeUndefined();
    });
  });

  describe('Facts Editor', () => {
    const mockRules: RuleGroup = {
      all: [['age', 'gt', '18']]
    };
    
    const mockFacts = {
      age: 25,
      name: 'John'
    };

    it('updates facts when valid JSON is entered', () => {
      const mockOnChange = jest.fn();
      render(
        <ICRulesEditor 
          rules={mockRules} 
          facts={mockFacts} 
          onChange={mockOnChange}
        />
      );

      const factsEditor = screen.getByTitle('enter your facts here');
      fireEvent.change(factsEditor, {
        target: { value: JSON.stringify({ age: 30, name: 'Jane' }, null, 2) }
      });

      expect(screen.getByText(/Facts are valid/i)).toBeInTheDocument();
    });

    it('shows invalid state when invalid JSON is entered', () => {
      render(
        <ICRulesEditor 
          rules={mockRules} 
          facts={mockFacts}
        />
      );

      const factsEditor = screen.getByTitle('enter your facts here');
      fireEvent.change(factsEditor, {
        target: { value: '{ invalid json }' }
      });

      expect(screen.getByText(/Facts are invalid/i)).toBeInTheDocument();
    });
  });
}); 