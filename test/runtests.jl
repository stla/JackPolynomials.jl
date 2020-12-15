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

@testset "Jack symbolic" begin
  @testset "Jack at x = 0" begin
    @test isapprox(JackPolynomial(2, Int64[], 2.0)(0.0, 0.0), 1.0)
    @test isapprox(JackPolynomial(3, [3; 2], 2.0)(0.0, 0.0, 0.0), 0.0)
  end
  @testset "Jack = 0 when l(lambda)>l(x)" begin
    @test JackPolynomial(2, [3; 2; 1], 2.0) == 0.0
    @test JackPolynomial(2, [3; 2; 1], 1.0) == 0.0
  end
  @testset "Jack = 1 when the partition is empty" begin
    @test JackPolynomial(2, Int64[], 2.0) == 1.0
    @test JackPolynomial(2, [0; 0], 2.0) == 1.0
  end
  @testset "Jack - some values" begin
    @test isapprox(JackPolynomial(4, [3; 1], 2.5)(2.0, 3.0, 4.0, 5.0), 111217.0)
    @test isapprox(JackPolynomial(4, [4], 2.5)(2.0, 3.0, 4.0, 5.0), 500338.5)
  end
end

@testset "Schur" begin
  @testset "Schur expansion of (sum x_i)^n" begin
    x = [3.0; 4.0; 5.0; 6.0]
    s = Schur(x, [4]) + 3*Schur(x, [3,1]) + 2*Schur(x, [2,2]) +
      3*Schur(x, [2,1,1]) + Schur(x, [1,1,1,1])
    @test isapprox(s, sum(x)^4)
  end 
  @testset "Schur = 0 when l(lambda)>l(x)" begin
    @test isapprox(Schur([1.0; 2.0], [3; 2; 1]), 0.0)
  end
  @testset "Schur (3,2)" begin
    x = [0.3, 2.0, 5.0]
    expected = x[1]^3*x[2]^2 + x[1]^3*x[3]^2 + x[1]^3*x[2]*x[3] +
      x[1]^2*x[2]^3 + x[1]^2*x[3]^3 + 2*x[1]^2*x[2]*x[3]^2 +
      2*x[1]^2*x[2]^2*x[3] + x[1]*x[2]*x[3]^3 + 2*x[1]*x[2]^2*x[3]^2 +
      x[1]*x[2]^3*x[3] + x[2]^2*x[3]^3 + x[2]^3*x[3]^2
    @test isapprox(Schur(x, [3; 2]), expected)
  end
end

@testset "Zonal" begin
  @testset "Zonal sum to the trace" begin
    x = [3.0; 4.0; 5.0]
    z = Zonal(x, [3]) + Zonal(x, [2,1]) + Zonal(x, [1,1,1])
    @test isapprox(z, sum(x)^3)
  end 
  @testset "Zonal = 0 when l(lambda)>l(x)" begin
    @test isapprox(Zonal([1.0; 2.0], [3; 2; 1]), 0.0)
  end
end
