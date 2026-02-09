INSERT INTO products (id, name, category, gender, price, stock_available, wishlist_count, stock_sold, profit_generated, style)
VALUES
  (1, 'Eclipse Trench', 'upper', 'unisex', 189.00, 42, 12, 88, 5600.00, 'gothic'),
  (2, 'Lumen Corset', 'upper', 'female', 129.00, 30, 24, 120, 7200.00, 'vintage'),
  (3, 'Carbon Knit', 'upper', 'male', 99.00, 55, 9, 64, 3100.00, 'monochromatic'),
  (4, 'Nova Trousers', 'lower', 'unisex', 149.00, 38, 15, 72, 4100.00, 'modern'),
  (5, 'Imperial Silk Coat', 'upper', 'unisex', 329.00, 12, 31, 42, 8200.00, 'luxury');

INSERT INTO product_variants (product_id, variant)
VALUES
  (1, 'Black'),
  (1, 'Ash'),
  (2, 'Burgundy'),
  (2, 'Ivory'),
  (3, 'Charcoal'),
  (3, 'Stone'),
  (4, 'Graphite'),
  (4, 'Obsidian'),
  (5, 'Midnight'),
  (5, 'Pearl');

INSERT INTO product_reviews (product_id, review)
VALUES
  (1, 'Perfect drape and weight.'),
  (2, 'Stunning fit with vintage detailing.'),
  (3, 'Soft knit, true to size.'),
  (4, 'Great silhouette for daily wear.'),
  (5, 'Luxury finish and premium lining.');
