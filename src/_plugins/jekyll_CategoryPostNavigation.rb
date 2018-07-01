module Jekyll
  class CategoryPostNavigation < Generator
    def generate(site)
      site.categories.each_pair do |category, posts|
        posts.sort! { |a,b| b <=> a}
        posts.each do |post|
          index = posts.index post
          next_in_category = nil
          prev_in_category = nil
          if index
            if index < posts.length - 1
              next_in_category = posts[index + 1]
            end
            if index > 0
              prev_in_category = posts[index - 1]
            end
          end
          post.data["next_in_category"] = prev_in_category unless prev_in_category.nil?
          post.data["prev_in_category"] = next_in_category unless next_in_category.nil?
        end
      end
    end
  end
end
