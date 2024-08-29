class CreateJoinTableBlogsTags < ActiveRecord::Migration[7.2]
  def change
    create_join_table :tags, :blogs do |t|
    end
  end
end
