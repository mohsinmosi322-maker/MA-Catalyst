SELECT
    p.ProductName,
    p.Category,
    SUM(s.Quantity) AS QuantitySold,
    p.Price,
    SUM(s.Quantity * p.Price) AS TotalSales
FROM Sales s
INNER JOIN Products p
    ON s.ProductID = p.ProductID
GROUP BY
    p.ProductName,
    p.Category,
    p.Price
ORDER BY
    TotalSales DESC;