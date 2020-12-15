using JackPolynomials
using Test

@testset "Jack" begin
  @testset "Jack at x = 0" begin
    @test isapprox(Jack([0.0; 0.0], Int64[], 2.0), 1.0)
    @test isapprox(Jack([0.0; 0.0; 0.0], [3; 2], 2.0), 0.0)
  end
  @testset "Jack = 0 when l(lambda)>l(x)" begin
    @test isapprox(Jack([1.0; 2.0], [3; 2; 1], 2.0), 0.0)
    @test isapprox(Jack([1.0; 2.0], [3; 2; 1], 1.0), 0.0)
  end
  @testset "Jack = 1 when the partition is empty" begin
    @test isapprox(Jack([1.0; 2.0], Int64[], 2.0), 1.0)
    @test isapprox(Jack([1.0; 2.0], [0; 0], 2.0), 1.0)
  end
  @testset "Jack - some values" begin
    @test isapprox(Jack([2.0; 3.0; 4.0; 5.0], [3; 1], 2.5), 111217.0)
    @test isapprox(Jack([2.0; 3.0; 4.0; 5.0], [4], 2.5), 500338.5)
  end
end
