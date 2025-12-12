// tests for rock-paper-scissors game logic
import { determineWinner, updateStats, resetGame } from './gameLogic.js';

describe('Rock-Paper-Scissors Game Logic', () => {
  
  describe('determineWinner', () => {
    test('rock beats scissors', () => {
      expect(determineWinner('rock', 'scissors')).toBe('win');
    });

    test('scissors beats paper', () => {
      expect(determineWinner('scissors', 'paper')).toBe('win');
    });

    test('paper beats rock', () => {
      expect(determineWinner('paper', 'rock')).toBe('win');
    });

    test('scissors loses to rock', () => {
      expect(determineWinner('scissors', 'rock')).toBe('lose');
    });

    test('paper loses to scissors', () => {
      expect(determineWinner('paper', 'scissors')).toBe('lose');
    });

    test('rock loses to paper', () => {
      expect(determineWinner('rock', 'paper')).toBe('lose');
    });

    test('same choices result in tie', () => {
      expect(determineWinner('rock', 'rock')).toBe('tie');
      expect(determineWinner('paper', 'paper')).toBe('tie');
      expect(determineWinner('scissors', 'scissors')).toBe('tie');
    });
  });

  describe('updateStats', () => {
    let gameState;

    beforeEach(() => {
      gameState = {
        stats: { wins: 0, losses: 0, ties: 0 },
        over: false
      };
    });

    test('increments wins correctly', () => {
      updateStats('win', gameState);
      expect(gameState.stats.wins).toBe(1);
      expect(gameState.stats.losses).toBe(0);
      expect(gameState.stats.ties).toBe(0);
    });

    test('increments losses correctly', () => {
      updateStats('lose', gameState);
      expect(gameState.stats.wins).toBe(0);
      expect(gameState.stats.losses).toBe(1);
      expect(gameState.stats.ties).toBe(0);
    });

    test('increments ties correctly', () => {
      updateStats('tie', gameState);
      expect(gameState.stats.wins).toBe(0);
      expect(gameState.stats.losses).toBe(0);
      expect(gameState.stats.ties).toBe(1);
    });

    test('handles multiple game results', () => {
      updateStats('win', gameState);
      updateStats('win', gameState);
      updateStats('lose', gameState);
      updateStats('tie', gameState);
      
      expect(gameState.stats.wins).toBe(2);
      expect(gameState.stats.losses).toBe(1);
      expect(gameState.stats.ties).toBe(1);
    });
  });

  describe('resetGame', () => {
    test('resets all stats to zero', () => {
      const gameState = {
        stats: { wins: 5, losses: 3, ties: 2 },
        over: false
      };

      resetGame(gameState);

      expect(gameState.stats.wins).toBe(0);
      expect(gameState.stats.losses).toBe(0);
      expect(gameState.stats.ties).toBe(0);
    });
  });
});