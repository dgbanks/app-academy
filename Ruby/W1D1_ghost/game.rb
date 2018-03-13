class Game
  def initialize(*players)
    @fragment = ''
    @players = players
  end

  def play
    play_round until game_over?
  end

  def play_round

  end

  def current_player

  end

  def previous_player

  end

  def next_player!

  end

  def take_turn(player)

  end

  def valid_play?(string)

  end

  def game_over?

  end

end

if __FILE__ == $PROGRAM_NAME
  game = Game.new(Player.new("Player One"), Player.new("Player Two"))
  game.run
end
