# frozen_string_literal: true

class ProductsController < ApplicationController
  load_and_authorize_resource except: :new


  # GET /products
  # GET /products.json
  def index
    @products = @current_shop.products
  end

  # GET /products/1
  # GET /products/1.json
  def show; end

  # GET /products/new
  def new
    @product = Product.new
  end

  # GET /products/1/edit
  def edit; end

  # POST /products
  # POST /products.json
  def create
    respond_to do |format|
      if @product.save
        format.html { redirect_to @product, notice: t('shared.created', resource: @product.class.to_s.humanize) }
      else
        format.html { render :new }
      end

      format.js
    end
  end

  # PATCH/PUT /products/1
  # PATCH/PUT /products/1.json
  def update
    respond_to do |format|
      if @product.update(product_params)
        format.html { redirect_to @product, notice: t('shared.created', resource: @product.class.to_s.humanize) }
      else
        format.html { render :edit }
      end

      format.js
    end
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    @product.destroy
    redirect_to products_path(@shop, @product), notice: t('shared.destroyed', resource: @product.class.to_s.humanize)
  end

  private

  def product_params
    params.require(:product).permit(:name, :price, :description, :stock, :shop_id, :code)
  end
end
